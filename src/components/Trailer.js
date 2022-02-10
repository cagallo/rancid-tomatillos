import React from 'react';
import '../css/Trailer.css';\
import PropTypes from 'prop-types';

const Trailer = ({backdropImg, src}) => {
  let content;
  if (src === 'https://www.youtube.com/embed/') {
    content = <img
      className='movie-trailer'
      src={backdropImg}
      alt='movie content'
    />;
  } else {
    content = <iframe
      id="trailer"
      className='movie-trailer'
      title="movie-trailer"
      src={src}>
    </iframe>
  }
  return (
      <div className='trailer-container'>
      {content}
      </div>
  );
}

export default Trailer;


Trailer.propTypes = {
  videos: PropTypes.shape({
    id: PropTypes.number,
    movie_id: PropTypes.number,
    key: PropTypes.string,
    site: PropTypes.string,
    type: PropTypes.string
  })
}