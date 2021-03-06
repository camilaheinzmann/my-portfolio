import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    
    font-family: 'Public Sans', sans-serif;
    transition: color 0.3s;
  }

  * {
    transition: background-color 0.3s;
  }
`;
