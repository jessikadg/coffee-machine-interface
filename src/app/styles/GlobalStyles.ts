import { createGlobalStyle, css } from "styled-components";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["300"], subsets: ["latin"] });

const styles = css`
  button {
    /* font-family: ${lato.style.fontFamily}; */
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
