import React from "react";
import Button from "../../Button/Button";
import phones from "../../../assets/image-mockups.png";
import "./Intro.css";

function Intro() {
  return (
    <div className="IntroBackground">
      <div className="Intro">
        <div>
          <h1>Next Generation Digital Banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more
          </p>
          <Button />
        </div>
        <img className="SlideBottom" src={phones} alt="mockups" />
      </div>
    </div>
  );
}

export default Intro;
