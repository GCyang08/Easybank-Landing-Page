import React from "react";
import "./Home.css";
import Intro from "./Intro/Intro";
import Choose from "./Choose/Choose";
import Articles from "./Articles/Articles";

function Home() {
  return (
    <div>
      <Intro />
      <Choose />
      <Articles />
    </div>
  );
}
export default Home;
