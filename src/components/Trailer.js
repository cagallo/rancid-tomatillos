import React from 'react';
import '../css/Trailer.css';

const Trailer = ({src}) => {
    return (
        <iframe id="trailer"
        className='movie-trailer'
        title="movie-trailer"
        src={src}>
        </iframe>
    )
}

export default Trailer;
