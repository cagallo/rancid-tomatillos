import React from "react";
import "../css/MoviePoster.css";
import PropTypes from "prop-types";

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

MoviePoster.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired, 
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };
