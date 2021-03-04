import React from "react";
import online from "../../../assets/icon-online.svg";
import budget from "../../../assets/icon-budgeting.svg";
import onboarding from "../../../assets/icon-onboarding.svg";
import api from "../../../assets/icon-api.svg";
import "./Choose.css";

function Choose() {
  const chooseDescription = {
    description: [
      {
        src: online,
        alt: "card icon",
        header: "Online Banking",
        pg:
          "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      },
      {
        src: budget,
        alt: "budget icon",
        header: "Simple Budgeting",
        pg:
          "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      },
      {
        src: onboarding,
        alt: "people icon",
        header: "Fast Onboarding",
        pg:
          "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      },
      {
        src: api,
        alt: "api icon",
        header: "Open API",
        pg:
          "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      },
    ],
  };
  return (
    <div className="ChooseLayout">
      <div>
        <h2>Why choose EasyBank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="ChooseDescriptionLayout">
          {chooseDescription.description.map((des, i) => {
            return (
              <div key={i}>
                <img src={des.src} alt={des.alt} />
                <h4>{des.header}</h4>
                <p>{des.pg}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Choose;
