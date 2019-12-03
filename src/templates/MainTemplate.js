import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'components/Navigation';
import Header from 'components/Header';

import styles from './MainTemplate.module.scss';

const MainTemplate = ({ children }) => {
  console.log(styles);
  return (
    <>
      <div className={styles.header__wrapper}>
        <Header />
      </div>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
