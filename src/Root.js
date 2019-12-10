import React from 'react';
import GlobalStyles from 'themes/GlobalStyles';
import mainTheme from 'themes/mainTheme';
import { ThemeProvider } from 'styled-components';

import SearchPage from 'pages/SearchPage';

function Root() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <SearchPage />
    </ThemeProvider>
  );
}

export default Root;
