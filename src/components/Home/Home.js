import React from "react";
import "./Home.module.css";
import Intro from "./Intro/Intro";
import Choose from "./Choose/Choose";
import Articles from "./Articles/Articles";
import Container from "@material-ui/core/Container";

const Home = (props) => {
  return (
    <Container>
      <div>
        <Intro />
        <Choose />
        <Articles />
      </div>
    </Container>
  );
};
export default Home;
