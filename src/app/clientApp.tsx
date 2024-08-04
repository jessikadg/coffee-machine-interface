"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { ReactNode } from "react";

interface ClientAppProps {
  children: ReactNode;
}

export const ClientApp = ({ children }: ClientAppProps) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
