import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithRouter } from 'tests/utils';
import Navigation from 'components/Navigation';
import Constants from 'config/Constants';

const setup = path => {
  const el = renderWithRouter(
    <Navigation route={path && Constants.PATHS.root.path} />,
  );
  return {
    ...el,
  };
};

describe('Router ', () => {
  test('should link change page', () => {
    const { getByText, history } = setup(Constants.PATHS.root.path);

    const acctivePathName = () => history.location.pathname;
    const galleryLink = getByText(Constants.PATHS.gallery.name);

    expect(galleryLink).toBeInTheDocument();
    expect(acctivePathName()).toBe(Constants.PATHS.root.path);

    fireEvent.click(galleryLink);

    expect(acctivePathName()).not.toBe(Constants.PATHS.root.path);
    expect(acctivePathName()).toBe(Constants.PATHS.gallery.path);
  });

  test('change active class', () => {
    const { getByText, container } = setup(Constants.PATHS.root.path);
    const galleryLink = getByText(Constants.PATHS.gallery.name);

    expect(
      container.querySelector(
        '.navigation__link.navigation__link--active',
      ),
    ).toHaveTextContent(Constants.PATHS.root.name);

    fireEvent.click(galleryLink);

    expect(
      container.querySelector(
        '.navigation__link.navigation__link--active',
      ),
    ).toHaveTextContent(Constants.PATHS.gallery.name);
  });
});
