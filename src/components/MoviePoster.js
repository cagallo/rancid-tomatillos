import React from "react";
import "../css/MoviePoster.css";

const MoviePoster = ({ title, rating, poster, id }) => {
  return (
    <section className="poster-frame" id={id}>
      <img className="poster" src={poster} alt="movie" />
      <p className="poster-banner">Rating: {parseFloat(rating).toFixed(1)} / 10</p>
      <h2 className="poster-banner">{title}</h2>
    </section>
  );
};
export default MoviePoster;
