import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3189FF",
    },
    secondary: {
      main: "#DD1C1A",
    },
    action: {
      focus: "#fff",
    },
  },
  shape: {
    borderRadius: "7px",
  },
  typography: {
    h1: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", sans-serif',
    },
    h2: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", sans-serif',
    },
    fontFamily: '"Montserrat", "Roboto", "Helvetica", sans-serif',
  },
});

export default theme;
