import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const GalleryGrid = ({ className, photos }) => {
  console.log('photos');
  console.log(photos);
  return (
    <div className={cx(className, ' gallery')}>
      <span>GGGGAsdf</span>
      <span>GGGGAsdf</span>
    </div>
  );
};

GalleryGrid.propTypes = {
  className: PropTypes.string,
  photos: PropTypes.arrayOf(Object).isRequired,
};
GalleryGrid.defaultProps = {
  className: '',
};

export default GalleryGrid;
