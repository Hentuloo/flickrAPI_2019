import React from 'react';
import Gallery from 'pages/Gallery';
import { renderWithRouterAndRedux } from 'tests/utils';
import * as Utils from 'config/Utils';
import Constants from 'config/Constants';
import { cleanup } from '@testing-library/react';

const setup = () => {
  const el = renderWithRouterAndRedux(<Gallery />);
  return {
    ...el,
  };
};
afterEach(() => {
  cleanup();
});

describe('Gallery page', () => {
  jest.spyOn(Utils, 'fetchJSONP');

  test('should display error message (when api fail)', () => {
    Utils.fetchJSONP.mockImplementation(
      (url, callbackName, callback) =>
        callback({ message: 'blah bla' }),
    );
    const { getByText } = setup();

    expect(Utils.fetchJSONP).toHaveBeenCalledTimes(1);
    expect(
      getByText(Constants.errorMessage.default),
    ).toBeInTheDocument();

    Utils.fetchJSONP.mockClear();
  });

  test('should display mocky data', () => {
    const mockyData = {
      items: [
        {
          title: 'mock title of image',
          link: 'mock outerlink',
          media: { m: 'mock link' },
        },
      ],
    };
    Utils.fetchJSONP.mockImplementation(
      (url, callbackName, callback) => callback(false, mockyData),
    );
    const { getByAltText } = setup();
    const mockedImageNode = getByAltText(mockyData.items[0].title);

    expect(Utils.fetchJSONP).toHaveBeenCalledTimes(1);
    expect(mockedImageNode).toBeInTheDocument();

    Utils.fetchJSONP.mockClear();
  });
});
