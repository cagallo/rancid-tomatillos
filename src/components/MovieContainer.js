import React from "react";
import MoviePoster from "./MoviePoster";
import { Link } from "react-router-dom";
import "../css/MovieContainer.css";

const MovieContainer = ({ allMovies, handlePosterClick }) => {
  const moviePosters = allMovies.map((movie) => {
    return <Link to={`/movies/${movie.id}`}>
      <MoviePoster
        key={movie.id}
        title={movie.title}
        rating={movie.average_rating}
        poster={movie.poster_path}
        id={movie.id}
        handlePosterClick={handlePosterClick}
      />
    </Link>
  });

  return (
    <div className="movies-container">
      {moviePosters}
    </div>
  );
};

export default MovieContainer;
