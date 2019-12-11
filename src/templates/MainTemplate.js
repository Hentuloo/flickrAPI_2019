import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Pattern from 'assets/images/pattern.png';

const BackgroundPattern = styled.div`
  &::before,
  &::after {
    content: '';
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: -1;
  }
  &::after {
    background-image: url(${Pattern});
    opacity: 0.09;
  }
  &::before {
    background: ${({ theme }) => theme.gradients[0]};
  }
`;
const Wrapper = styled.div`
  position: relative;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <BackgroundPattern />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
