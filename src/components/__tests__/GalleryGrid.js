import React from 'react';
import { render } from '@testing-library/react';
import GalleryGrid from 'components/GalleryGrid/GalleryGrid';
import Constants from 'config/Constants';

const setup = ({ componentProps } = {}) => {
  const el = render(<GalleryGrid photos={[]} {...componentProps} />);
  return {
    ...el,
  };
};

describe('GalleryGrid component', () => {
  test('snapshot', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should display statement when no images', () => {
    const { container } = setup();
    expect(container).toHaveTextContent(
      Constants.STATEMETS.lackOfPhotos,
    );
  });
  test('should display images', async () => {
    const { getByAltText } = setup({
      componentProps: {
        photos: [
          {
            title: 'My testing image',
            outherLink: '#href',
            link: 'imageSrc',
          },
        ],
      },
    });
    expect(getByAltText('My testing image')).toBeInTheDocument();
  });
});
