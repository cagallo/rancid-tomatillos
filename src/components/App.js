import React, {Component} from 'react';
import Header from './Header';
import MovieContainer from './MovieContainer';
import MovieView from './MovieView';
import apiCalls from '../apiCalls';
import { cleanMovieData, formatAverageRating } from "../utilities.js";
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      isLoading: true,
      selectedMovie: ''
    };
  }

  componentDidMount = () => {
    apiCalls.getMovieData()
      .then((response) => response.json())
      .then(({ movies }) => {
        const cleanedMoviePoster = movies.map((movie) => {
          const formattedRating = formatAverageRating(movie["average_rating"]);
          return { ...movie, average_rating: formattedRating };
        });
        this.setState({ movies: cleanedMoviePoster });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  handleClick = (id) => {
    apiCalls.getMovieData(id)
      .then((repsonse) => repsonse.json())
      .then(({ movie }) => {
        const cleanedMovieData = cleanMovieData(movie);
        return this.setState({ selectedMovie: { ...movie, ...cleanedMovieData }});
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  render = () => {
    let currentView;
    if (this.state.selectedMovie) {
      currentView = <MovieView selectedMovie={this.state.selectedMovie}/>
    } else {
      currentView=  <MovieContainer allMovies={this.state.movies} handleClick={this.handleClick}/>
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
