// Here we can insert styling that should be applied globally to the application.
// This is particularly useful when overriding library components, when setting up dark/light themes and other scenarios.
import { createGlobalStyle, css } from "styled-components";

const styles = css`
  a:-webkit-any-link {
    text-decoration: none;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
