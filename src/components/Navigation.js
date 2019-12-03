import React from 'react';
import { Link } from 'react-router-dom';
import Constants from 'config/Constants';

import MarilynMonroeImage from 'assets/images/MarilynMonroe.jpg';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__person}>
        <img
          className={styles.navigation__person_image}
          src={MarilynMonroeImage}
          alt="Fotografia Marilyn"
        />
      </div>
      <nav className={styles.navigation__list}>
        <ul>
          <li>
            <Link to={Constants.PATHS.root.path}>
              {Constants.PATHS.root.name}
            </Link>
          </li>
          <li>
            <Link to={Constants.PATHS.gallery.path}>
              {Constants.PATHS.gallery.name}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
