import React from "react";
import "./Home.module.css";
import Intro from "./Intro/Intro";
import Choose from "./Choose/Choose";
import Articles from "./Articles/Articles";

const Home = (props) => {
  return (
    <div>
      <Intro />
      <Choose />
      <Articles />
    </div>
  );
};
export default Home;
