import React from 'react';
import '../css/MovieView.css';

const MovieView = ({ selectedMovie }) => {
  return (
      <section className='movie-view'>
        <img src={selectedMovie.backdrop_path} alt="movie poster"/>
        <h2>{selectedMovie.title}</h2>
        <p>{selectedMovie.average_rating}</p>
        <p>{selectedMovie.release_date}</p>
        <p>{selectedMovie.overview}</p>
        <p>{selectedMovie.genre}</p>
        <p>{selectedMovie.budget}</p>
        <p>{selectedMovie.revenue}</p>
        <p>{selectedMovie.runtime}</p>
      </section>
  );
}

export default MovieView;
