import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const GalleryGrid = ({ className }) => {
  return (
    <div className={cx(className, ' gallery')}>
      {/* <span>GGGGAsdf</span>
      <span>GGGGAsdf</span> */}
    </div>
  );
};

GalleryGrid.propTypes = {
  className: PropTypes.string,
};
GalleryGrid.defaultProps = {
  className: '',
};

export default GalleryGrid;
