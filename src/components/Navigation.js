import React from 'react';
import { NavLink } from 'react-router-dom';

import Constants from 'config/Constants';

import MarilynMonroeImage from 'assets/images/MarilynMonroe.jpg';
import styles, {
  navigation,
  navigation__person,
  navigation__person_image,
  navigation__nav,
  navigation__nav_list,
  navigation__nav_element,
  navigation__nav_link,
} from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={navigation}>
      <div className={navigation__person}>
        <img
          className={navigation__person_image}
          src={MarilynMonroeImage}
          alt="Fotografia Marilyn"
        />
      </div>
      <nav className={navigation__nav}>
        <ul className={navigation__nav_list}>
          <li className={navigation__nav_element}>
            <NavLink
              className={navigation__nav_link}
              to={Constants.PATHS.root.path}
              activeClassName={styles['navigation__nav_link--active']}
              exact
            >
              <span className="sr-only">
                {Constants.PATHS.root.name}
              </span>
              <i className="fa fa-user" aria-hidden="true" />
            </NavLink>
          </li>
          <li className={navigation__nav_element}>
            <NavLink
              className={navigation__nav_link}
              to={Constants.PATHS.gallery.path}
              activeClassName={styles['navigation__nav_link--active']}
            >
              <span className="sr-only">
                {Constants.PATHS.gallery.name}
              </span>
              <i className="fa fa-picture-o" aria-hidden="true" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
