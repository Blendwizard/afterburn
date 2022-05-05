import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 20px;
    line-height: 1.35;
    background-color: #3A3939;
    color: white;
    overflow-x: hidden;
    font-family: Poppins, sans-serif;
  }

  h1 {
    font-size: 72px;
    background: -webkit-linear-gradient(orange, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Exo 2, sans-serif;
    font-weight: 700;
    &:hover {
      font-weight: 200;
      cursor: pointer;
    }

  }

  h3 {
    &:hover {
      font-weight: 600;
      cursor: pointer;
    }
  }

  .modal-content {
    background-color: black
  }
`;