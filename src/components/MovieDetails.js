import React from 'react';
import '../css/MovieDetails.css';

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
    </div>
  );
}

export default MovieDetails;
