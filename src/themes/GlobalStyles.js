import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 html {
    font-size: 62.5%;
}

body {
    min-height: 100vh;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    font-family: $font-second;
    font-weight: $fw-bold;
    font-size: 1.6rem;
    background-color: nth($gray, 2);

    ${({ theme }) => theme.mediaQuery.md}{
         font-size: 2.1rem;
    }
    ${({ theme }) => theme.mediaQuery.lg}{
        font-size: 2.4rem;
    }
}
`;
