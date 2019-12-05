import React, { useEffect, useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
import GalleryGrid from 'components/GalleryGrid';

import { fetchJSONP } from 'config/Utils';
import Constants from 'config/Constants';

import './Gallery.scss';

const Gallery = () => {
  const [apiStatus, setApiStatus] = useState('wait');

  useEffect(() => {
    fetchJSONP(Constants.API.marilynMonroePhotos, error => {
      // calback (error,data)
      if (error) {
        return setApiStatus('failure');
      }
      return setApiStatus('success');
    });
  }, []);

  return (
    <MainTemplate title="Marilyn Monroe Gallery">
      <section className="galleryPage">
        {apiStatus === 'wait' && (
          <div
            className="galleryPage__spiner"
            title="Trwa ładowanie obrazków"
          >
            <span className="galleryPage__spiner-text sr-only">
              Ładowanie obrazków...
            </span>
            <div className="galleryPage__spiner-element spiner" />
          </div>
        )}
        {apiStatus === 'failure' && (
          <div className="galleryPage__paragraph">
            Błąd spróbuj później
          </div>
        )}
        {apiStatus === 'success' && (
          <div className="galleryPage__paragraph">
            Działa poprawnie
          </div>
        )}

        <GalleryGrid />
      </section>
    </MainTemplate>
  );
};

export default Gallery;
