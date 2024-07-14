"use client";
import React, { useState } from "react";
import {
  AppBar,
  AppBarProps,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
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
function MobileMenu(props: {
  anchor?: "right" | "left";
  open: boolean;
  onClose: (event: object, reason: string) => void;
}) {
  return (
    <Drawer className="p-2" {...props}>
      <div className="p-2">
        <List>
          {[1, 2, 3].map((num) => (
            <ListItem>
              <ListItemButton>{` item number ${num}`}</ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

function MobileContent(props: { scrolled: boolean; dir: "rtl" | "ltr" }) {
  const [ShowDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      <Toolbar
        className={`flex ${
          props.dir === "rtl"
            ? "justify-between"
            : "flex-row-reverse justify-end"
        }`}
      >
        <div className={`flex justify-center items-center `}>
          <DiamondIcon
            fontSize="large"
            className={props.scrolled ? "" : "text-white"}
          />
          <Typography className={"ml-2"} variant="h5">
            {" "}
            COMPANY NAME
          </Typography>
        </div>
        <div>
          <IconButton
            className={props.dir === "ltr" ? "pl-0" : ""}
            onClick={() => {
              setShowDrawer(true);
            }}
          >
            <MenuIcon className={props.scrolled ? "" : "text-white"} />
          </IconButton>
        </div>
      </Toolbar>
      <MobileMenu
        anchor={props.dir === "rtl" ? "right" : "left"}
        open={ShowDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
      />
    </>
  );
}

function AppHeader(props: { transparent: boolean }) {
  const trigger = useScrollTrigger({ threshold: 0, disableHysteresis: true });
  const ScrollableBar = useScrollableBar({
    transparent: props.transparent,
    scrolled: trigger,
  });
  return (
    <ScrollableBar>
      <MobileContent scrolled={trigger} dir="rtl" />
    </ScrollableBar>
  );
}

export default AppHeader;
