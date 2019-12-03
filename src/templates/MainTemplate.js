import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'components/Navigation';
import Header from 'components/Header';

import styles from './MainTemplate.module.scss';

const MainTemplate = ({ children, title }) => {
  return (
    <div className={styles.mainTemplate}>
      <Header title={title} />
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

MainTemplate.defaultProps = {
  title: '',
};

export default MainTemplate;
