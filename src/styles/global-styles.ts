import { createGlobalStyle } from 'styled-components';
import background from '../app/images/background.svg';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto, 'Roboto', sans-serif;
    background: url(${background});
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Roboto,'Roboto', sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
