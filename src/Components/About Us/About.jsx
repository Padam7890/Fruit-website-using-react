import React from "react";
import fruit_line_1 from "../../assets/img/fruit-line-1.png";
import about_fruit from "../../assets/img/about-fruits.png";
import about_branch from "../../assets/img/branch-1.png";
import './About.css';
import Button from "../ReusableComponents/Buttons.jsx/Button";


const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__data">
            <h2 className="section__title">
              Our Delectable Selection <br />
              of Healthy Fruits
            </h2>
            <p className="about__description">
              Indulge in a symphony of flavors and vibrant nutrition with our
              handpicked assortment of fresh and healthy fruits. From succulent
              berries bursting with antioxidants to juicy tropical delights
              loaded with vitamins, our selection is a feast for your taste buds
            </p>
             <Button className="button">
                Know More about
             </Button>
             <img src={fruit_line_1} alt="image" className="about__fruit" />
          </div>
          <img src={about_fruit} alt="image" className="about__img" />

        </div>
        <img src={about_branch} alt="image" className="about__branch" />
      </section>
    </>
  );
};

export default About;
