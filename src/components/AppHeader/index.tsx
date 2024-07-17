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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
import { styled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";

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
      <List>
        <ListItem>
          <ListItemButton>{`products`}</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>{`about us`}</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>{`FAQ`}</ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

function MobileContent(props: { scrolled: boolean; dir: "rtl" | "ltr" }) {
  const [ShowDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      <Toolbar
        className={`flex justify-between ${
          props.dir === "ltr" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div>
          <IconButton aria-label="search">
            <Search className={props.scrolled ? "" : "text-white"} />
          </IconButton>
        </div>
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
          aria-label="sideMenu"
            // className={props.dir === "ltr" ? "pl-0" : ""}
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
function PcContent(props: { scrolled: boolean }) {
  return (
    <Toolbar className="flex justify-between items-center flex-row-reverse">
      <div>
          <Button color="inherit">{`products`}</Button>
          <Button color="inherit">{`about us`}</Button>
          <Button color="inherit">{`FAQ`}</Button>
      </div>
      <div className="flex justify-center flex-row items-center">
        <DiamondIcon
          fontSize="large"
          className={props.scrolled ? "" : "text-white"}
        />
        <Typography className={"ml-2"} variant="h5">
          COMPANY NAME
        </Typography>
      </div>
    </Toolbar>
  );
}

function AppHeader(props: { transparent: boolean }) {
  const trigger = useScrollTrigger({ threshold: 0, disableHysteresis: true });
  const ScrollableBar = useScrollableBar({
    transparent: props.transparent,
    scrolled: trigger,
  });
  const theme = useTheme();
  const screenIsLarge: boolean = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <ScrollableBar>
      {!screenIsLarge ? (
        <MobileContent scrolled={trigger} dir="ltr" />
      ) : (
        <PcContent scrolled={trigger} />
      )}
    </ScrollableBar>
  );
}

export default AppHeader;
