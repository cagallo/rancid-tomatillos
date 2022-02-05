import React from 'react';
import '../css/MovieView.css';

const MovieView = (props) => {
    return (
        <section className='movie-view'>
            <img src={props.selectedMovie.backdrop_path} alt="movie photo"/>
            <h2>{props.selectedMovie.title}</h2>
            <p>{props.selectedMovie.average_rating}</p>
            <p>{props.selectedMovie.release_date}</p>
        </section>
    )
}

export default MovieView;
