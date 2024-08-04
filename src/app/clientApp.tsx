"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/styled-components-registry";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./lib/store";

interface ClientAppProps {
  children: ReactNode;
}

export const ClientApp = ({ children }: ClientAppProps) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </StyledComponentsRegistry>
  );
};
