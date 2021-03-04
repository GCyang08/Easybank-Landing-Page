import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

import logo from "../../assets/logo.svg";

import "./Navigation.css";
import {
  makeStyles,
  Paper,
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Drawer,
  IconButton,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  tabRoot: {
    minWidth: "100px",
    padding: "20px",
  },
  toolbar: {
    backgroundColor: "white",
  },
  paper: {
    borderRadius: "10px",
    margin: "50px",
    padding: "25px",
  },
});

function Navigation() {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const navLinks = {
    links: [
      { label: "HOME" },
      { label: "ABOUT" },
      { label: "CONTACT" },
      { label: "BLOG" },
      { label: "CAREERS" },
    ],
  };

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1026
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Paper>
        <div className="NavBarLayout">
          <img src={logo} alt="easy bank logo" />
          <Tabs
            TabIndicatorProps={{
              style: {
                background:
                  "linear-gradient( hsl(136, 65%, 51%), hsl(192, 70%, 51%))",
              },
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {navLinks.links.map((nav, i) => {
              return (
                <Tab
                  key={i}
                  text
                  classes={{ root: classes.tabRoot }}
                  label={nav.label}
                  disabled
                />
              );
            })}
          </Tabs>
          <Button />
        </div>
      </Paper>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.toolbar}>
        <Box display="flex" flexGrow={1}>
          <img src={logo} alt="easy bank logo" />
        </Box>
        <IconButton
          {...{
            edge: "end",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          classes={{ paper: classes.paper }}
          anchor="top"
          open={drawerOpen}
          onClose={handleDrawerClose}
          transitionDuration={1000}
        >
          {navLinks.links.map((nav, i) => {
            return (
              <div key={i} className="NavBarMobile">
                <h1>{nav.label}</h1>
              </div>
            );
          })}
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <AppBar position="relative">
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}

export default Navigation;
