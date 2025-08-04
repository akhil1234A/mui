import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const getTheme = (mode) =>
  createTheme({
    cssVarPrefix: "mui",
    cssVariables: true,
    palette: {
      mode,
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
      background: {
        default: mode === "light" ? "#f4f6f8" : "#121212",
        paper: mode === "light" ? "#fff" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#000" : "#fff",
      },
    },
    typography: {
      fontFamily: "Inter, Roboto, sans-serif",
    },
    shape: {
      borderRadius: 12,
    },
  });
