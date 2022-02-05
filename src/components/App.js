import React, {Component} from 'react';
import Header from './Header';
import MovieContainer from './MovieContainer';
import MovieView from './MovieView';
import movieData from '../movieData';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData,
      error: "",
      isLoading: true,
      selectedMovie: ''
    };
  }

  handleClick = (id) => {
    console.log(id);
    const currentMovie = this.state.movies.movies.find(movie=>movie.id === parseInt(id));
    console.log(currentMovie);
    this.setState({selectedMovie: currentMovie});
  }

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
