import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Constants from 'config/Constants';
import Image from './Image';

const GalleryGrid = ({ className, photos }) => {
  return (
    <div className={cx(className, ' gallery-grid')}>
      {photos.length > 0 ? (
        photos.map(photo => <Image key={photo.link} data={photo} />)
      ) : (
        <h3>{Constants.STATEMETS.lackOfPhotos}</h3>
      )}
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
