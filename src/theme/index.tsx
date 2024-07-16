"use client";

import { orange } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  direction: "ltr",
  palette: {
    primary: { main: orange[200], dark: orange[300] },
  },
});

theme.typography.h3 = {
  fontSize: "1.1rem",
  fontWeight: "600",
  [theme.breakpoints.up("md")]: {
    fontWeight: "500",
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontWeight: "400",
    fontSize: "2.4rem",
  },
};
theme.typography.h5 = {
  fontSize: "1rem",
  fontWeight: "600",
  [theme.breakpoints.up("md")]: {
    fontWeight: "500",
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontWeight: "400",
    fontSize: "1.5rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.9rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.25rem",
  },
};

// const ModifiedTheme = responsiveFontSizes(theme);

export default theme;
