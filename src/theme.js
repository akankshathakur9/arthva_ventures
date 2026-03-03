import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F1B2A", // Deep Navy
    },
    secondary: {
      main: "#C6A75E", // Muted Gold
    },
    background: {
      default: "#F5F1E8", // Warm Beige
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 500,
    },
  },
});

export default theme;