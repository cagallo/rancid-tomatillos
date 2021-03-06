import React from 'react';
import MoviePoster from './MoviePoster';
import { Link } from 'react-router-dom';
import '../css/MovieContainer.css';
import 'animate.css';
import PropTypes from 'prop-types';

const MovieContainer = ({ allMovies }) => {
  const moviePosters = allMovies.map((movie) => {
    return <Link key={movie.id} to={`/${movie.id}`}>
      <MoviePoster
        key={movie.id}
        title={movie.title}
        rating={movie.average_rating}
        poster={movie.poster_path}
        id={movie.id}
      />
    </Link>;
  });

  return (
    <div className="movies-container animate__animated animate__fadeInUpBig">
      {moviePosters}
    </div>
  );
};

export default MovieContainer;

MovieContainer.propTypes = {
  allMovies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    rating: PropTypes.string,
    poster: PropTypes.string,
    id: PropTypes.number
  }))
};
