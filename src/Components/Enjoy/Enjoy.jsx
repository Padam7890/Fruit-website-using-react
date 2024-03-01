import React from "react";
import "./Enjoy.css";
import enjoy_1 from "../../assets/img/enjoy-1.png";
import enjoy_2 from "../../assets/img/enjoy-2.png";
import enjoy_3 from "../../assets/img/enjoy-3.png";


const Enjoy = () => {
  return (
    <section className="enjoy section">
      <h2 className="section__title">Eat and Enjoy</h2>
      <div className="enjoy__container container grid">
        <article className="enjoy__card">
          <div className="enjoy__bg"></div>
          <img className="enjoy__img" src={enjoy_1} alt="" />
          <h3 className="enjoy__title"> Healthy</h3>
          <span className="enjoy__subtitle">Ropical Fruit</span>
        </article>
        <article className="enjoy__card">
          <div className="enjoy__bg"></div>
          <img className="enjoy__img" src={enjoy_2} alt="" />
          <h3 className="enjoy__title">Delicious</h3>
          <span className="enjoy__subtitle">Grape Fruit</span>
        </article>
        <article className="enjoy__card">
          <div className="enjoy__bg"></div>
          <img className="enjoy__img" src={enjoy_3} alt="" />
          <h3 className="enjoy__title">Organic</h3>
          <span className="enjoy__subtitle">Field Fruit</span>
        </article>
      </div>
    </section>
  );
};

export default Enjoy;
