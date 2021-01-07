import React from "react";
import Navigation from "./Navigation/Navigation";
import Home from "../components/Home/Home";
import Footer from "./Footer/Footer";
import Container from "@material-ui/core/Container";

function Easybank() {
  return (
    <div>
      <Navigation />
      <Container>
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default Easybank;
