import React, {Component} from 'react';
import Trailer from './Trailer';
import MovieDetails from './MovieDetails';
import { cleanMovieData } from "../utilities.js";
import apiCalls from '../apiCalls';
import '../css/MovieView.css';
import { Link } from 'react-router-dom';

class MovieView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMovie: {},
            trailer: 'https://www.youtube.com/embed/',
            error: ''
        }
    }

    componentDidMount = () => {
      Promise.all([
      apiCalls.getMovieData(this.props.id),
      apiCalls.getTrailerData(this.props.id)
      ])
        .then(data => {
          const [movie, videos] = [data[0].movie, data[1].videos];
          const cleanedMovieData = cleanMovieData(movie);
          if (!videos.length) {
            return this.setState({ selectedMovie: { ...movie, ...cleanedMovieData }})
          }
          const key = videos.find(video => video.type === 'Trailer').key
          this.setState(prevState => {
            return {
              selectedMovie:  {...movie, ...cleanedMovieData},
              trailer: `${prevState.trailer}${key}`,
            }
          })
        })
        .catch((error) => this.setState({ error: error.message }));
    }

    render = () => {
      const trailerContent = this.state.error ? <h2 className="error-message">{this.state.error}</h2> : <Trailer backdropImg={this.state.selectedMovie.backdrop_path} src={this.state.trailer}/>;
      return (
        <section className='movie-view'>
          {trailerContent}
          <MovieDetails
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
          <Link to='/' className='back-button'>◀︎ Back</Link>
        </section>
      );
    }
}

export default MovieView;
