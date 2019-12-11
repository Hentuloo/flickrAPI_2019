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
    font-size: 1.4rem;

    ${({ theme }) => theme.mediaQuery.md}{
         font-size: 1.8rem;
    }
    ${({ theme }) => theme.mediaQuery.lg}{
        font-size: 2.2rem;
    }
}
*,
*::after,
*::before {
    box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
}
`;
