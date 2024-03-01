import React from "react";
import './Home.css'
import fruit_line_2 from "../../assets/img/fruit-line-2.png";
import home_fruits from "../../assets/img/home-fruits.png";
import home_branch from "../../assets/img/branch-2.png";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container container grid">
        <div className="home__data">
          <h1 className="home__title">
            Enjoy the <br />
            Best Fresh <br />
            Fruits
          </h1>
          <p className="home__descrption">
            Indulge in the ultimate delight with the best fresh fruits. Immerse
            your senses in the vibrant colors, crisp textures, and succulent
            flavors of nature's finest offerings.
          </p>
          <a href="" className="button">
            Order Fruit Now
          </a>
          <img src={fruit_line_2} alt="image" className="home__fruit" />
        </div>
        <img src={home_fruits} alt="image of fruits" className="home__img" />

      </div>
      <img src={home_branch} alt="" className="home__branch" />
    </section>
  );
};

export default Home;
