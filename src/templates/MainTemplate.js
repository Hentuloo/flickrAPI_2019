import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'components/Navigation';
import Header from 'components/Header';

import './MainTemplate.scss';

const MainTemplate = ({ children, title }) => {
  return (
    <div className="mainTemplate">
      <Header className="mainTemplate__header" title={title} />
      <Navigation className="mainTemplate__navigation" />
      <main className="mainTemplate__content">{children}</main>
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
