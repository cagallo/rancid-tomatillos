import React from "react";
import "../css/MoviePoster.css";

const MoviePoster = ({ title, rating, poster, id, handleClick }) => {
  return (
    <section className="poster-frame" onClick={(event => handleClick(event.target.id))} id={id}>
      <img src={poster} alt="movie" />
      <p>Rating: {parseFloat(rating).toFixed(1)} / 10</p>
      <h2>{title}</h2>
    </section>
  );
};
export default MoviePoster;
