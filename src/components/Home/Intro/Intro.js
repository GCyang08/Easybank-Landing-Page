import React from "react";
import phones from "../../../assets/image-mockups.png";
import classes from "./Intro.module.css";

const Intro = (props) => {
  return (
    <div className={classes.Intro_Display}>
      <div className={classes.Col1}>
        <img
          className={classes.slide_bottom}
          src={phones}
          alt="image-mockups"
        />
      </div>
      <div className={classes.Col2}>
        <h1>Next Generation Digital Banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more
        </p>
        <button>Request Invite</button>
      </div>
    </div>
  );
};

export default Intro;
