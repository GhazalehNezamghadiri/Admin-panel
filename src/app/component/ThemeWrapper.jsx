"use client";

import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeMode } from "./mode"

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  }
})

export default function ThemeWrapper({ children }) {
  return (
    <MUIThemeProvider theme={theme}>
      <ThemeMode>
        {children}
      </ThemeMode>
    </MUIThemeProvider>
  )
}