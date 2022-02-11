import React, {Component} from 'react';
import Trailer from './Trailer';
import { cleanMovieData } from "../utilities.js";
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
            error: '',
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
          <div className='movie-details-container'>
            <section className='movie-details'>
              <img className="single-view-poster" src={this.state.selectedMovie.poster_path} alt="movie poster"/>
              <div className='movie-info'>
                <h2 className='single-view-title'>{this.state.selectedMovie.title}</h2>
                <p>{this.state.selectedMovie.runtime}</p>
                <p>Rating: {this.state.selectedMovie.average_rating} / 10</p>
                {this.state.selectedMovie.release_date && <p>Release Date: {this.state.selectedMovie.release_date}</p>}
                {this.state.selectedMovie.genre && <p>Genre: {this.state.selectedMovie.genre}</p>}
                {this.state.selectedMovie.budget && <p>Budget: {this.state.selectedMovie.budget}</p>}
                {this.state.selectedMovie.revenue && <p>Revenue: {this.state.selectedMovie.revenue}</p>}
              </div>
            </section>
            <h3>Overview</h3>
            {this.state.selectedMovie.overview && <p className='single-view-overview'>{this.state.selectedMovie.overview}</p>}
            <Link to='/' className='back-button'>◀︎ Back</Link>
          </div>
        </section>
      );
    }
}

export default MovieView;

MovieView.propTypes = {
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
}