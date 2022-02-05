import React, {Component} from 'react';
import Header from './Header';
import MovieContainer from './MovieContainer';
import movieData from '../movieData';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData,
      error: "",
      isLoading: true
    };
  }

  render() {
    return (
      <section className="App">
        <Header />
        <MovieContainer allMovies={this.state.movies} />
      </section>
    );
  }
}

export default App;
