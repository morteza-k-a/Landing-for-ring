"use client";

import { orange } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: { main: orange[200], dark: orange[300] },
  },
});

theme.typography.h3 = {
  fontSize: '1.1rem',
  fontWeight:'600',
  [theme.breakpoints.up('md')]: {
    fontWeight:'500',
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontWeight:'400',
    fontSize: '2.4rem',
  },
};
// const ModifiedTheme = responsiveFontSizes(theme);

export default theme;
