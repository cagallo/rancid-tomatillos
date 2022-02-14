import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieDetails.css';
import 'animate.css';
import PropTypes from 'prop-types';

const MovieDetails = ({
  id,   
  posterPath,
  title,
  runtime,
  averageRating,
  releaseDate,
  genre,
  budget,
  revenue,
  overview
}) => {
  return (
    <div className="movie-details-container animate__animated animate__fadeInRight">
      <section className="movie-details">
        <img className="single-view-poster" src={posterPath} alt={`${title} poster`}/>
        <div className="movie-info">
          <h2 className="single-view-title">{title}</h2>
          <p>{runtime}</p>
          <p>Rating: {averageRating} / 10</p>
          {releaseDate && <p>Release Date: {releaseDate}</p>}
          {genre && <p>Genre: {genre}</p>}
          {budget && <p>Budget: {budget}</p>}
          {revenue && <p>Revenue: {revenue}</p>}
        </div>
      </section>
      <h3>Overview</h3>
      {overview && <p className="single-view-overview">{overview}</p>}
      <div className="back-button-container">
        <Link to="/" key={id} className="back-button">Back ▶︎</Link>
      </div>
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  id: PropTypes.number,
  posterPath: PropTypes.string,
  title: PropTypes.string,
  averageRating: PropTypes.string,
  runtime: PropTypes.string,
  releaseDate: PropTypes.string,
  genre: PropTypes.string,
  budget: PropTypes.string,
  revenue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  overview: PropTypes.string
};
