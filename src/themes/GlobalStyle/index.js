import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *, h1 {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Fire-Sans-Condensed', 'sans-serif';
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
