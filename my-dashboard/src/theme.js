import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#d32f2f" }, // Red
    secondary: { main: "#ff9800" }, // Orange
    background: {
      default: "#ffebee",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
      fontSize: "2.125rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(211, 47, 47, 0.1)",
    "0px 4px 8px rgba(211, 47, 47, 0.15)",
    "0px 8px 16px rgba(211, 47, 47, 0.2)",
    "0px 16px 32px rgba(211, 47, 47, 0.25)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
    "0px 24px 48px rgba(211, 47, 47, 0.3)",
  ],
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0px 8px 16px rgba(211, 47, 47, 0.3)",
          },
        },
        contained: {
          background: "linear-gradient(45deg, #d32f2f 30%, #ff9800 90%)",
          "&:hover": {
            background: "linear-gradient(45deg, #b71c1c 30%, #f57c00 90%)",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(211, 47, 47, 0.05)",
            transform: "translateX(4px)",
          },
        },
      },
    },
  },
});

export default theme;
