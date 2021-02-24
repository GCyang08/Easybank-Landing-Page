import React from "react";
import Nav from "./Navigation.module.css";
import logo from "../../assets/logo.svg";

function Navigation() {
  return (
    <div>
      <div className={Nav.Navigation_Border}>
        <div className={Nav.Navigation}>
          <div>
            <img src={logo} alt="easy bank logo" />
          </div>
          <div>
            <button className={Nav.Button}>Request Invite</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
