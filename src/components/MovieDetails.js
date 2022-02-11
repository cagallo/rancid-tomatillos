import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieDetails.css';
import PropTypes from 'prop-types';

const MovieDetails = ({
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
    <div className='movie-details-container'>
      <section className='movie-details'>
        <img className="single-view-poster" src={posterPath} alt="movie poster"/>
        <div className='movie-info'>
          <h2 className='single-view-title'>{title}</h2>
          <p>{runtime}</p>
          <p>Rating: {averageRating} / 10</p>
          {releaseDate && <p>Release Date: {releaseDate}</p>}
          {genre && <p>Genre: {genre}</p>}
          {budget && <p>Budget: {budget}</p>}
          {revenue && <p>Revenue: {revenue}</p>}
        </div>
      </section>
      <h3>Overview</h3>
      {overview && <p className='single-view-overview'>{overview}</p>}
      <Link to='/' className='back-button'>Back ▶︎</Link>
    </div>
  );
}

export default MovieDetails;


MovieDetails.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    average_rating: PropTypes.number, 
    runtime: PropTypes.string,
    release_date: PropTypes.string,
    genre: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    overview: PropTypes.string
}