import React from 'react';
import '../css/Trailer.css';
import 'animate.css';
import PropTypes from 'prop-types';

const Trailer = ({backdropImg, src}) => {
  let content;
  if (src === 'https://www.youtube.com/embed/') {
    content = <img
      className="movie-trailer"
      src={backdropImg}
      alt="movie content"
    />;
  } else {
    content = <iframe
      id="trailer"
      className="movie-trailer"
      title="movie-trailer"
      src={src}>
    </iframe>;
  }
  return (
    <div className="trailer-container animate__animated animate__backInRight">
      {content}
    </div>
  );
};

export default Trailer;

Trailer.propTypes = {
  backdropImg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([undefined])
  ]),
  src: PropTypes.string
};
