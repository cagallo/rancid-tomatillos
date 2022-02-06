import React from 'react';
import '../css/Trailer.css';

const Trailer = ({src}) => {
    return (
        <iframe id="trailer"
        height='80%'
        width='80%'
        title="movie-trailer"
        src={src}>
        </iframe>
    )
}

export default Trailer;
