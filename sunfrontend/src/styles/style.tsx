import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    text-decoration: none;
  }

  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
