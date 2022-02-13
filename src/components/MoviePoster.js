import React from 'react';
import '../css/MoviePoster.css';
import PropTypes from 'prop-types';

const MoviePoster = ({ title, rating, poster, id }) => {
  return (
    <section className="poster-frame" id={id}>
      <img className="poster" src={poster} alt={`${title} poster`} />
      <p className="poster-banner">Rating: {rating} / 10</p>
      <h2 className="poster-banner">{title}</h2>
    </section>
  );
};
export default MoviePoster;

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
