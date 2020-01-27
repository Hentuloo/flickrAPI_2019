import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import rootReducer from 'store/reducers/rootReducer';

export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
};

export const renderWithRedux = (
  ui,
  {
    initialState,
    store = createStore(
      rootReducer,
      applyMiddleware(thunk),
      initialState,
    ),
  } = {},
) => {
  return {
    ...render(<ReduxProvider store={store}>{ui}</ReduxProvider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
};

export const renderWithRouterAndRedux = (
  ui,
  {
    initialState,
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    store = createStore(
      rootReducer,
      applyMiddleware(thunk),
      initialState,
    ),
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <ReduxProvider store={store}>
      <Router history={history}>{children}</Router>
    </ReduxProvider>
  );
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
    store,
  };
};
