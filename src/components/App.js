import React, {Component} from 'react';
import Header from './Header';
import MovieContainer from './MovieContainer';
import MovieView from './MovieView';
import apiCalls from '../apiCalls';
import { cleanMovieData, formatAverageRating } from "../utilities.js";
import { Route } from 'react-router-dom';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      isLoading: true,
      selectedMovie: {},
      trailer: 'https://www.youtube.com/embed/'
    };
  }

  componentDidMount = () => {
    apiCalls.getMovieData()
      .then(({ movies }) => {
        const cleanedMoviePoster = movies.map((movie) => {
          const formattedRating = formatAverageRating(movie["average_rating"]);
          return { ...movie, average_rating: formattedRating };
        });
        this.setState({ movies: cleanedMoviePoster });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  // handlePosterClick = (id) => {
  //   apiCalls.getMovieData(id)
  //     .then((response) => checkResponse(response))
  //     .then(({ movie }) => {
  //       const cleanedMovieData = cleanMovieData(movie);
  //       return this.setState({ selectedMovie: { ...movie, ...cleanedMovieData }});
  //     })
  //     .catch((error) => this.setState({ error: error.message }));
  // };

  handlePosterClick = async(id) => {
    try {
        const requests = [apiCalls.getMovieData(id), apiCalls.getTrailerData(id)]
        const data = await Promise.all(requests)
        let [movie, videos] = [data[0], data[1].videos];
        const cleanedMovieData = cleanMovieData(movie.movie);
        if (!videos.length) {
            return this.setState({ selectedMovie: { ...movie.movie, ...cleanedMovieData }})
        }
        const key = videos.find(video => video.type === 'Trailer').key
        this.setState(prevState => {
          return {
            selectedMovie:  {...movie.movie, ...cleanedMovieData},
            trailer: `${prevState.trailer}${key}`,
          }
        });
    }
    catch(error) {
        this.setState({ error: error.message });
    }
  }


  // handlePosterClick = (id) => {
  //   let movie, videos, cleanedMovieData, key;
  //   Promise.all([
  //   apiCalls.getMovieData(id),
  //   apiCalls.getTrailerData(id)
  //   ])
  //     .then(data => {
  //       [movie, videos] = [data[0], data[1].videos];
  //       cleanedMovieData = cleanMovieData(movie.movie);
  //       if(!videos.length) {
  //         return this.setState({ selectedMovie: { ...movie, ...cleanedMovieData }})
  //       } else {
  //         key = videos.find(video => video.type === 'Trailer').key
  //         this.setState(prevState => {
  //           return {
  //             selectedMovie:  {...movie.movie, ...cleanedMovieData},
  //             trailer: `${prevState.trailer}${key}`,
  //           }
  //         })
  //       }
  //     })
  //     .catch((error) => this.setState({ error: error.message }));
  // };


  render = () => {
    let currentView;
    if (Object.keys(this.state.selectedMovie).length > 0) {
     currentView = <MovieView trailer={this.state.trailer} selectedMovie={this.state.selectedMovie}/>
    } else {
      currentView = this.state.error ? <h2 className="landing-page-error-message">{this.state.error}</h2> : <MovieContainer allMovies={this.state.movies} handlePosterClick={this.handlePosterClick}/>
    }
    return (
      <section className="App">
        <Header />
        <Route path='/movies/:id' render={({ match }) => {
          const selectedMovie = this.state.movies.find(movie => movie.id === match.params.id)
          return <MovieView trailer={this.state.trailer} selectedMovie={selectedMovie}/>
        }} />
        <Route exact path='/' render={() => {
          {this.state.error && <h2 className="landing-page-error-message">{this.state.error}</h2>}
          <MovieContainer allMovies={this.state.movies} handlePosterClick={this.handlePosterClick}/>
        }} />
        {currentView}
      </section>
    );
  }
}

export default App;
