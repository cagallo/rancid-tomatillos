import React from 'react';
import Trailer from './Trailer';
// import apiCalls from '../apiCalls';
// import {checkResponse} from '../utilities';
import '../css/MovieView.css';

const MovieView = (props) => {
    const trailerContent = props.error ? <h2 className="error-message">{props.error}</h2> : <Trailer backdropImg={props.selectedMovie.backdrop_path} src={props.trailer}/>;
        return (
        <section className='movie-view'>
                {trailerContent}
            <div className='movie-details-container'>
                <section className='movie-details'>
                    <img className="single-view-poster" src={props.selectedMovie.poster_path} alt="movie poster"/>
                    <div className='movie-info'>
                        <h2 className='single-view-title'>{props.selectedMovie.title}</h2>
                        <p>{props.selectedMovie.runtime}</p>
                        <p>Rating: {props.selectedMovie.average_rating} / 10</p>
                        {props.selectedMovie.release_date && <p>Release Date: {props.selectedMovie.release_date}</p>}
                        {props.selectedMovie.genre && <p>Genre: {props.selectedMovie.genre}</p>}
                        {props.selectedMovie.budget && <p>Budget: {props.selectedMovie.budget}</p>}
                        {props.selectedMovie.revenue && <p>Revenue: {props.selectedMovie.revenue}</p>}
                    </div>
                </section>
                <h3>Overview</h3>
                {props.selectedMovie.overview && <p className='single-view-overview'>{props.selectedMovie.overview}</p>}
            </div>
        </section>
    );
}   



export default MovieView;
