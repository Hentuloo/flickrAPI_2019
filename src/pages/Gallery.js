import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import GalleryGrid from 'components/GalleryGrid';

import './Gallery.scss';

const Gallery = () => {
  return (
    <MainTemplate title="Marilyn Monroe Gallery">
      <section className="galleryPage">
        <div
          className="galleryPage__spiner"
          title="Trwa ładowanie obrazków"
        >
          <span className="galleryPage__spiner-text sr-only">
            Ładowanie obrazków...
          </span>
          <div className="galleryPage__spiner-element spiner" />
        </div>
        <GalleryGrid />
      </section>
    </MainTemplate>
  );
};

export default Gallery;
