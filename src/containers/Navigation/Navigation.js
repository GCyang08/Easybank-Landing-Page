import React from "react";
import Nav from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "0px",
    margin: "0px",
  },
});

function Navigation() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={Nav.Navigation_Border}>
      <div className={Nav.Navigation}>
        <div>
          <img src={logo} alt="easy bank logo" />
        </div>
        <nav className={Nav.Nav_List}>
          {/* <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Home" />
              <Tab label="About" />
              <Tab label="Contact" />
              <Tab label="Blog" />
              <Tab label="Careers" />
            </Tabs>
          </Paper> */}
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </nav>
        <div>
          <button className={Nav.Button}>Request Invite</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
