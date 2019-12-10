import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Pattern from 'assets/images/pattern.png';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.gradients[0]};

  &::after {
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-image: url(${Pattern});
    opacity: 0.09;
  }
`;

const MainTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
