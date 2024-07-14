'use client'
import React from "react";
import { AppBar, AppBarProps, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import { styled } from "@mui/material/styles";

function useScrollableBar(props: { scrolled: boolean; transparent: boolean }) {
  if (props.transparent) {
    return styled(AppBar)<AppBarProps>(() => ({
      boxShadow: !props.scrolled ? "none" : undefined,
      color: !props.scrolled ? "white" : undefined,
      backgroundColor: !props.scrolled ? "transparent" : undefined,
      backgroundImage: !props.scrolled
        ? `linear-gradient(to bottom, black, transparent)`
        : undefined,
    }));
  }
  return AppBar;
}

function AppHeader(props: { transparent: boolean }) {
  const trigger = useScrollTrigger({threshold:0,disableHysteresis:true});
  const ScrollableBar = useScrollableBar({
    transparent: props.transparent,
    scrolled: trigger,
  });
  return (
    <ScrollableBar>
      <Toolbar>
        <Typography variant="h5">text here</Typography>
      </Toolbar>
    </ScrollableBar>
  );
}

export default AppHeader;
