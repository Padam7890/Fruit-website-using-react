import React from "react";
import popular_1 from "../../assets/img/popular-1.png";
import popular_2 from "../../assets/img/popular-2.png";
import popular_3 from "../../assets/img/popular-3.png";
import popular_4 from "../../assets/img/popular-4.png";
import popular_5 from "../../assets/img/popular-5.png";
import popular_6 from "../../assets/img/popular-6.png";
import './Popular.css'

const Popular = () => {
  const fruits = [
    {
      id: 1,
      name: "Apple",
      image: popular_1,
      price: 100,
      subtitle:"Organic Apple"
    },
    {
      id: 2,
      name: "Watermelon",
      image: popular_2,
      price: 200,
      subtitle:"Organic Watermelon"
    },
    {
      id: 3,
      name: "Pineapple",
      image: popular_3,
      price: 300,
      subtitle:"Organic Pineapple"
    },
    {
      id: 4,
      name: "Banana",
      image: popular_4,
      price: 400,
      subtitle:"Organic Banana"
    },
    {
      id: 5,
      name: "Strawberry",
      image: popular_5,
      price: 500,
      subtitle:"Organic Strawberry"
    },
    {
      id: 6,
      name: "Mango",
      image: popular_6,
      price: 600,
      subtitle:"Organic Mango"
    },
  ];

  return (
    <section className="popular" id="popular">
      <h2 className="section__title">Popular</h2>
      <div className="popular__container container grid">
        {fruits.map((fruit) => (
          <article className="popular__card" key={fruit.id}>
          <div className="popular__bg"></div>
          <img className="popular__img" src={fruit.image} alt="" />
          <h3 className="popular__title"> {fruit.name}</h3>
          <span className="popular__subtitle">{fruit.subtitle}</span>
          <h3 className="popular__price">Rs. {fruit.price}</h3>
          <button className="popular__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>
        ))}
      </div>
    </section>
  );
};

export default Popular;
