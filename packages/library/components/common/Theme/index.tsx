import { ThemeProvider } from "emotion-theming";
import { FC, ReactNode } from "react";
import { theme } from "./theming";

export const Theme: FC<{ children: ReactNode }> = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
