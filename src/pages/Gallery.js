import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from 'store/actions/photosActions';

import MainTemplate from 'templates/MainTemplate';
import GalleryGrid from 'components/GalleryGrid';

import './Gallery.scss';
import Constants from 'config/Constants';

const Gallery = () => {
  const dispatch = useDispatch();
  const { errorMessage, photoFeched, photos } = useSelector(
    state => state.photosReducer,
  );

  useEffect(() => {
    if (!photoFeched) {
      dispatch(getPhotos());
    }
  }, []);

  return (
    <MainTemplate title="Marilyn Monroe Gallery">
      <section className="galleryPage">
        {!photoFeched ? (
          <div
            className="galleryPage__spiner"
            title="Trwa ładowanie obrazków"
          >
            <span className="galleryPage__spiner-text sr-only">
              {Constants.STATEMETS.waitForPhotos}
            </span>
            <div className="galleryPage__spiner-element spiner" />
          </div>
        ) : errorMessage ? (
          <div className="galleryPage__error">
            <i
              className="fa fa-exclamation-triangle galleryPage__error-icon"
              aria-hidden="true"
            />
            <span className="galleryPage__error-message">
              {Constants.errorMessage[errorMessage] ||
                Constants.errorMessage.default}
            </span>
          </div>
        ) : (
          <GalleryGrid photos={photos} />
        )}
      </section>
    </MainTemplate>
  );
};

export default Gallery;
