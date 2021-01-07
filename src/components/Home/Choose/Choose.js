import React from "react";
import online from "../../../assets/icon-online.svg";
import budget from "../../../assets/icon-budgeting.svg";
import onboarding from "../../../assets/icon-onboarding.svg";
import api from "../../../assets/icon-api.svg";
import classes from "./Choose.module.css";

const Choose = (props) => {
  return (
    <div className={classes.Section2}>
      <div className={classes.Header}>
        <h2>Why choose EasyBank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className={classes.Choose}>
        <div className={classes.Choose_Display}>
          <img src={online} alt="online banking" />
          <h4>Online Banking</h4>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className={classes.Choose_Display}>
          <img src={budget} alt="Simple budgeting" />
          <h4>Simple Budgeting</h4>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className={classes.Choose_Display}>
          <img src={onboarding} alt="fast onboarding" />
          <h4>Fast Onboarding</h4>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div>
          <img src={api} alt="open api" />
          <h4>Open API</h4>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
