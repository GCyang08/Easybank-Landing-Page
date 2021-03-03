import React from "react";
import logo from "../../assets/logo.svg";
import fb from "../../assets/icon-facebook.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.Footer_Display}>
        <div className={classes.Col1}>
          <img className={classes.Logo} src={logo} alt="easybank logo" />
          <div className={classes.Icons}>
            <img src={fb} alt="facebook logo" />
            <img src={youtube} alt="youtube logo" />
            <img src={twitter} alt="twitter logo" />
            <img src={pinterest} alt="pinterest logo" />
            <img src={instagram} alt="instagram logo" />
          </div>
        </div>
        <div>
          <p>About Us</p>
          <p>Contact</p>
          <p>Blogs</p>
        </div>
        <div>
          <p className={classes.Col3}>Careers</p>
          <p>Support</p>
          <p>Privacy Policy</p>
        </div>
        <div className={classes.Button}>
          <button>Request Invite</button>
          <br />
          <span>&copy; Easybank. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
