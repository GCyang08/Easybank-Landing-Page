import React from "react";
import "./Footer.css";

import Button from "../Button/Button";

import logo from "../../assets/logo.svg";
import fb from "../../assets/icon-facebook.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

function Footer() {
  const socialMediaIcons = {
    icons: [
      { src: fb, alt: "facebook logo" },
      { src: youtube, alt: "youtube logo" },
      { src: twitter, alt: "twitter logo" },
      { src: pinterest, alt: "pinterest logo" },
      { src: instagram, alt: "instagram logo" },
    ],
  };
  return (
    <div className="FooterLayout">
      <div>
        <img src={logo} alt="easybank logo" />
        <div className="SocialMediaIcons">
          {socialMediaIcons.icons.map((img, i) => {
            return (
              <div key={i}>
                <img src={img.src} alt={img.alt} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p>About Us</p>
        <p>Contact</p>
        <p>Blogs</p>
      </div>
      <div>
        <p>Careers</p>
        <p>Support</p>
        <p>Privacy Policy</p>
      </div>
      <div className="ButtonFooter">
        <div>
          <Button />
        </div>
        <span>&copy; Easybank. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
