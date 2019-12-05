import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import Constants from 'config/Constants';

import MarilynMonroeImage from 'assets/images/MarilynMonroe.jpg';
import './Navigation.scss';

const Navigation = ({ className }) => {
  return (
    <div className={cx(className, 'navigation')}>
      <div className="navigation__wrapper">
        <div className="navigation__person">
          <img
            className="navigation__person-image"
            src={MarilynMonroeImage}
            alt="Fotografia Marilyn"
          />
        </div>
        <nav className="navigation__nav">
          <ul className="navigation__nav-list">
            <li className="navigation__nav-element">
              <NavLink
                className="navigation__link"
                to={Constants.PATHS.root.path}
                activeClassName="navigation__link navigation__link--active"
                exact
              >
                <div className="navigation__link-inner">
                  <span className="sr-only">
                    {Constants.PATHS.root.name}
                  </span>
                  <i className="fa fa-user" aria-hidden="true" />
                </div>
              </NavLink>
            </li>
            <li className="navigation__nav-element">
              <NavLink
                className="navigation__link"
                to={Constants.PATHS.gallery.path}
                activeClassName="navigation__link navigation__link--active"
              >
                <div className="navigation__link-inner">
                  <span className="sr-only">
                    {Constants.PATHS.gallery.name}
                  </span>
                  <i className="fa fa-picture-o" aria-hidden="true" />
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};
Navigation.defaultProps = {
  className: '',
};
export default Navigation;
