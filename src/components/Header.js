import React from 'react';
import PropTypes from 'prop-types';
import HeaderImage from 'assets/images/sand.jpg';
import styles from './Header.module.scss';

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      {title && <h1 className="sr-only">{title}</h1>}
      <img
        className={styles.header__image}
        src={HeaderImage}
        alt="Piasek i kamienie"
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: '',
};

export default Header;
