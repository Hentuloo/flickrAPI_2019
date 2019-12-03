import React from 'react';
import { Link } from 'react-router-dom';
import Constants from 'config/Constants';

const Navigation = () => {
  return (
    <nav>
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
  );
};

export default Navigation;
