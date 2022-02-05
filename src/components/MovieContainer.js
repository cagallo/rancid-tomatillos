import React from "react";
import MoviePoster from "./MoviePoster";
import "../css/MovieContainer.css";

const MovieContainer = ({ allMovies, handleClick }) => {
  const moviePosters = allMovies.map((movie) => (
    <MoviePoster
      key={movie.id}
      title={movie.title}
      rating={movie.average_rating}
      poster={movie.poster_path}
      id={movie.id}
      handleClick={handleClick}
    />
  ));

  return (
    <div className="movies-container">
      {moviePosters}
    </div>
  );
};

export default MovieContainer;
