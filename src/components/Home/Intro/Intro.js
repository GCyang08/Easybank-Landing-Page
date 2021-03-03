import React from "react";
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
          <button>Request Invite</button>
        </div>
        {/* <div className="IntroBackground"> */}
        <img src={phones} alt="image mockups" />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Intro;
