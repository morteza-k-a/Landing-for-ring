import React from "react";
import { AppBar, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from "@/theme";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";



function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode | null;
}>) {
    
  return (
    <ThemeProvider theme={theme}>
      <AppHeader/>
      {children}
      <AppFooter/>
    </ThemeProvider>
  );
}

export default AppLayout;
