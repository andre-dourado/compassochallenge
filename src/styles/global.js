import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, button, h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    background: none;
    border: 0;
    color: #333333;
  }

  a {
    text-decoration: none;
    color: #333333;
  }
`;
