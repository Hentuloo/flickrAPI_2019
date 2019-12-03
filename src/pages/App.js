import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Constants from 'config/Constants';
import Gallery from './Gallery';
import Introduction from './Introduction';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path={Constants.PATHS.root.path}
            component={Introduction}
            exact
          />
          <Route
            path={Constants.PATHS.gallery.path}
            component={Gallery}
          />
        </Switch>
      </div>
    </Router>
  );
}
