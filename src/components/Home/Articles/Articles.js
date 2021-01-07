import React from "react";
import classes from "./Articles.module.css";
import money from "../../../assets/image-currency.jpg";
import restaurant from "../../../assets/image-restaurant.jpg";
import plane from "../../../assets/image-plane.jpg";
import confetti from "../../../assets/image-confetti.jpg";

const Articles = (props) => {
  return (
    <div className={classes.Section3}>
      <h2>Latest Articles</h2>
      <div className={classes.Section3_Display}>
        <div className={classes.Articles}>
          <img src={money} alt="money" />
          <br />
          <div className={classes.Cards}>
            <span>By Claire Robinson </span>
            <br />
            <h5>Receive money in any currency with no fees</h5>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single…
            </p>
          </div>
        </div>
        <div className={classes.Articles}>
          <img src={restaurant} alt="restaurant" />
          <br />
          <div className={classes.Cards}>
            <span>By Wilson Hutton </span>
            <br />
            <h5>Treat yourself without worrying about money</h5>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you…
            </p>
          </div>
        </div>
        <div className={classes.Articles}>
          <img src={plane} alt="plane" />
          <br />
          <div className={classes.Cards}>
            <span>By Wilson Hutton </span>
            <br />
            <h5>Take your Easybank card wherever you go</h5>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you…
            </p>
          </div>
        </div>
        <div className={classes.Articles}>
          <img src={confetti} alt="confetti" />
          <br />
          <div className={classes.Cards}>
            <span>By Claire Robinson </span>
            <br />
            <h5>Our invite-only Beta accounts are now live!</h5>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
