import React, {Component} from 'react';
import Header from './Header';
import MovieContainer from './MovieContainer';
import MovieView from './MovieView';
import apiCalls from '../apiCalls';
import { cleanMovieData, formatAverageRating, checkResponse} from "../utilities.js";
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      isLoading: true,
      selectedMovie: {}
    };
  }

  componentDidMount = () => {
    apiCalls.getMovieData()
      .then((response) => checkResponse(response))
      .then(({ movies }) => {
        const cleanedMoviePoster = movies.map((movie) => {
          const formattedRating = formatAverageRating(movie["average_rating"]);
          return { ...movie, average_rating: formattedRating };
        });
        this.setState({ movies: cleanedMoviePoster });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  handlePosterClick = (id) => {
    apiCalls.getMovieData(id)
      .then((response) => checkResponse(response))
      .then(({ movie }) => {
        const cleanedMovieData = cleanMovieData(movie);
        return this.setState({ selectedMovie: { ...movie, ...cleanedMovieData }});
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  render = () => {
    let currentView;
    if (Object.keys(this.state.selectedMovie).length > 0) {
      currentView = <MovieView selectedMovie={this.state.selectedMovie}/>
    } else {
      currentView = this.state.error ? <h2 className="landing-page-error-message">{this.state.error}</h2> : <MovieContainer allMovies={this.state.movies} handlePosterClick={this.handlePosterClick}/>
    }
    return (
      <section className="App">
        <Header />
        {currentView}
      </section>
    );
  }
}

export default App;
