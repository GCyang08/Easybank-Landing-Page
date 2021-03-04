import React from "react";
import "./Articles.css";
import money from "../../../assets/image-currency.jpg";
import restaurant from "../../../assets/image-restaurant.jpg";
import plane from "../../../assets/image-plane.jpg";
import confetti from "../../../assets/image-confetti.jpg";

function Articles() {
  const aritcleSection = {
    articles: [
      {
        src: money,
        alt: "money",
        span: "By Claire Robinson",
        header: "Receive money in any currency with no fees",
        pg:
          "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…",
      },
      {
        src: restaurant,
        alt: "restaurant",
        span: "By Wilson Hutton",
        header: "Treat yourself without worrying about money",
        pg:
          "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…",
      },
      {
        src: plane,
        alt: "plane",
        span: "By Wilson Hutton",
        header: "Take your Easybank card wherever you go",
        pg:
          "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you…",
      },
      {
        src: confetti,
        alt: "confetti",
        span: "By Claire Robinson",
        header: "Our invite-only Beta accounts are now live!",
        pg:
          "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...",
      },
    ],
  };
  return (
    <div className="Articles">
      <div>
        <h2>Latest Articles</h2>
        <div className="ArticlesLayout">
          {aritcleSection.articles.map((articles, i) => {
            return (
              <div key={i} className="MappedLayout">
                <img src={articles.src} alt={articles.alt} />
                <div>
                  <span>{articles.span}</span>
                  <h5>{articles.header}</h5>
                  <p>{articles.pg}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
