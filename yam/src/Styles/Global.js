import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
  body {
    margin: 2rem;
    background: #0D0C1D;
    color: #EFFFFA;;
    font-family: system-ui;
    font-size: 1.8rem;
    line-height: 1.5;
  }
  h1 {
    margin: 0 0 1em;
    color: #345;
    text-align: center;
  }
  ul {
    li {
      list-style: none;
    }
  }
`;

export default GlobalStyle;