import { createGlobalStyle } from 'styled-components';
import MontserratVariable from '../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf';

const GlobalStyles = createGlobalStyle`
/* CSS variables */
:root {
    --my-cool-color: red;
}

/* Extra Bold */
@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratVariable}) format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'Montserrat' !important;
  font-weight: 400 !important;
  background-color: #1f3745 !important;
}
`;

export default GlobalStyles;
