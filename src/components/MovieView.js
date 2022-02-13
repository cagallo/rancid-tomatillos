import React, {Component} from 'react';
import Trailer from './Trailer';
import MovieDetails from './MovieDetails';
import { cleanMovieData } from '../utilities.js';
import apiCalls from '../apiCalls';
import '../css/MovieView.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      trailer: 'https://www.youtube.com/embed/',
      error: ''
    };
  }

  componentDidMount = async() => {
    try {
      const requests = [apiCalls.getMovieData(this.props.id), apiCalls.getTrailerData(this.props.id)];
      const data = await Promise.all(requests);
      let [movie, videos] = [data[0].movie, data[1].videos];
      const cleanedMovieData = cleanMovieData(movie);
      if (!videos.length) {
        return this.setState({ selectedMovie: { ...movie, ...cleanedMovieData }});
      }
      const key = videos.find(video => video.type === 'Trailer').key;
      this.setState(prevState => {
        return {
          selectedMovie: {...movie, ...cleanedMovieData},
          trailer: `${prevState.trailer}${key}`,
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render = () => {
    const pageContent = [
      <Trailer key={this.props.id + '-trailer'} backdropImg={this.state.selectedMovie.backdrop_path} src={this.state.trailer}/>,
      <MovieDetails
        key={this.props.id + '-details'}
        posterPath={this.state.selectedMovie.poster_path}
        title={this.state.selectedMovie.title}
        runtime={this.state.selectedMovie.runtime}
        averageRating={this.state.selectedMovie.average_rating}
        releaseDate={this.state.selectedMovie.release_date}
        genre={this.state.selectedMovie.genre}
        budget={this.state.selectedMovie.budget}
        revenue={this.state.selectedMovie.revenue}
        overview={this.state.selectedMovie.overview}
      />
    ];
    const errorMessage = [
      <h2 key={this.props.id + '-error-message'} className="error-message">{this.state.error}</h2>,
      <Link
        key={this.props.id + '-error'}
        to="/"
        className="return-home-button">Go back to main page ▶︎
      </Link>
    ];
    const style = this.state.error ? 'error-view' : 'movie-view';
    return (
      <section className={style}>
        {this.state.error ? errorMessage : pageContent}
      </section>
    );
  };
}

export default MovieView;

MovieView.propTypes = {
  id: PropTypes.string,
  selectedMovie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    runtime: PropTypes.number,
    release_date: PropTypes.string,
    genre: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    overview: PropTypes.string
  })
};
