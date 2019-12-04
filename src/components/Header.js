import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import HeaderImage from 'assets/images/sand.jpg';
import './Header.scss';

const Header = ({ title, className }) => {
  return (
    <header className={cx(className, 'header')}>
      {title && <h1 className="header__headline sr-only">{title}</h1>}
      <img
        className="header__image"
        src={HeaderImage}
        alt="Piasek i kamienie"
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
Header.defaultProps = {
  title: '',
  className: '',
};

export default Header;
