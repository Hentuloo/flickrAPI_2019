import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
 
 html {
    font-size: 62.5%;
}

body {
    min-height: 100vh;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;

    ${({ theme }) => theme.mediaQuery.md}{
         font-size: 2.1rem;
    }
    ${({ theme }) => theme.mediaQuery.lg}{
        font-size: 2.4rem;
    }
}
`;
