import React from "react";
import MoviePoster from "./MoviePoster";
import "../css/MovieContainer.css";

const MovieContainer = ({ allMovies }) => {
  const moviePosters = allMovies.movies.map((movie) => (
    <MoviePoster
      key={movie.id}
      title={movie.title}
      rating={movie.average_rating}
      poster={movie.poster_path}
    />
  ));

  return (
    <div className="movies-container">
      {moviePosters}
    </div>
  );
};

export default MovieContainer;
