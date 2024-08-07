import React from "react";
import "./Joinus.css";
import Join_bg from "../../assets/img/join-bg.png";
import leaf from "../../assets/img/leaf.png";
import Button from "../ReusableComponents/Buttons.jsx/Button";




const Joinus = () => {
  return (
    <section className="join section" id="join">
      <div className="join__container container grid">
        <div className="join__content grid">
          <div className="join__data">
            <h2 className="section__title">
              Recive The <br />
              Best Fruits
            </h2>
            <p className="join__description">
              Dive into the latest wave of freshness with our newest arrivals in
              the world of healthy fruits! Join us on a journey of flavor and
              vitality
            </p>
          </div>
          <form action="" className="join__form">
            <input
              type="email"
              placeholder="Enter Your email"
              className="join__input"
            />
            <Button type="submit" className="join__button">
              Join Us
            </Button>
          </form>
          <img src={Join_bg} alt="image" className="join__bg" />
        </div>
        <img src={leaf} alt="" className="join__leaf-1" />
        <img src={leaf} alt="" className="join__leaf-2" />
      </div>
    </section>
  );
};

export default Joinus;
