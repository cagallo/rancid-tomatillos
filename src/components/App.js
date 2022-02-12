import React, {Component} from 'react';
import Header from './Header';
import MovieContainer from './MovieContainer';
import MovieView from './MovieView';
import apiCalls from '../apiCalls';
import { formatAverageRating } from "../utilities.js";
import { Route } from 'react-router-dom';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      selectedMovie: {},
      trailer: 'https://www.youtube.com/embed/'
    };
  }
  
  componentDidMount = async() => {
    try { 
      let data = await apiCalls.getMovieData();
      const cleanedMoviePoster = data.movies.map((movie) => {
      const formattedRating = formatAverageRating(movie["average_rating"]);
      return { ...movie, average_rating: formattedRating };
      });
      this.setState({ movies: cleanedMoviePoster });
    }
    catch(error) {
      this.setState({ error: error.message });
    }
  }

  render = () => {
    return (
      <section className="App">
        <Header />
        <Route path='/:id' render={({ match }) => {
          return <MovieView id={match.params.id}  />
        }} />
        <Route exact path='/'>
          {this.state.error && <h2 className="landing-page-error-message">{this.state.error}</h2>}
          <MovieContainer allMovies={this.state.movies} />
        </Route>
      </section>
    );
  }
}

export default App;
