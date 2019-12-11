import React from 'react';
import styled from 'styled-components';

import MainTemplate from 'templates/MainTemplate';
import Input from 'components/Input';

import Countries from 'config/Countries';

const Wrapper = styled.div`
  width: 94%;
  max-width: 800px;
  margin: 80px auto 0px;
`;

const SearchPage = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Input items={Countries} placeholder="Szukaj miast w..." />
      </Wrapper>
    </MainTemplate>
  );
};

export default SearchPage;
