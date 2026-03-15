import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shape: {
    borderRadius: 12,
  },

  palette: {
    mode: "light",

    primary: {
      main: "#1976d2",
    },

    background: {
      default: "#f6f7fb",
    },
  },

  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});
