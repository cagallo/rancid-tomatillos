import React, {Component} from 'react';
import Header from './Header';
import MovieContainer from './MovieContainer';
import MovieView from './MovieView';
//import movieData from '../movieData';
import apiCalls from '../apiCalls';
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
    apiCalls.getAllMovies()
      .then((response) => response.json())
      .then((movies) => this.setState({ movies: movies.movies }))
      .catch((error) => this.setState({ error: error.message }))
      .finally(this.setState({ isLoading: false }));
  };

  handleClick = (id) => {
    console.log(id);
    const currentMovie = this.state.movies.find(movie=>movie.id === parseInt(id));
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
