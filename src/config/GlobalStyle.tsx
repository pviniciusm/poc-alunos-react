import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, html, body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.secondary}
  }

  body {
    height: 100vh;
    overflow-y: auto;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
