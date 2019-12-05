import React from 'react';
import PropTypes from 'prop-types';

import './GalleryGrid.scss';

const Image = ({ data: { title, outherLink, link } }) => {
  return (
    <div className="gallery-grid__item">
      <a
        className="gallery-grid__item-link"
        target="_blank"
        rel="noopener noreferrer"
        href={outherLink}
      >
        <img
          className="gallery-grid__item-image"
          crossOrigin="anonymous"
          src={link}
          alt={title}
        />
        <i
          className="fa fa-link gallery-grid__item-icon"
          aria-hidden="true"
        />
      </a>
    </div>
  );
};

Image.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    outherLink: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Image;
