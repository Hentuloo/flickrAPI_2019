import React from 'react';
import MainTemplate from 'templates/MainTemplate';

import './Introduction.scss';

const Introduction = () => {
  return (
    <MainTemplate title="About Marilyn Monroe">
      <article className="introduction">
        <h2 className="introduction__headline">Marilyn Monroe</h2>
        <small className="introduction__place">
          <i
            className="fa fa-map-marker introduction__place-icon"
            aria-hidden="true"
          />
          <span className="introduction__place-text">Poznań, PL</span>
        </small>
        <p className="introduction__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam nisi nesciunt commodi minus labore facere, incidunt
          facilis tenetur et accusamus. Sit, debitis vel quos
          assumenda eligendi cumque sint reprehenderit nam? facere,
          incidunt facilis tenetur et accusamus. Sit, de
        </p>
        <blockquote className="introduction__quote quote">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam nisi nesciunt commodi minus labore facere, incidunt
          facilis tenetur et accusamus.
        </blockquote>
        <p className="introduction__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam nisi nesciunt commodi Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquam nisi nesciunt commodi
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam nisi nesciunt commodi
        </p>
      </article>
    </MainTemplate>
  );
};

export default Introduction;
