import React from "react";
import "../css/MoviePoster.css";

const MoviePoster = ({ title, rating, poster }) => {
  return (
    <section className="poster-frame">
      <img src={poster} alt="movie" />
      <p>Rating: {parseFloat(rating).toFixed(1)} / 10</p>
      <h2>{title}</h2>
    </section>
  );
};
export default MoviePoster;
