import React from "react";

import logo from "../../assets/img/logo.png";
import fruit_line_3 from "../../assets/img/fruit-line-3.png";
import branch_1 from "../../assets/img/branch-1.png";
import branch_2 from "../../assets/img/branch-2.png";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    { href: "#", iconClass: "ri-facebook-circle-line" },
    { href: "#", iconClass: "ri-instagram-line" },
    { href: "#", iconClass: "ri-youtube-line" },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="footer__container container grid">
        <div>
          <a href="#" className="footer__logo">
            <img src={logo} alt="logo" />
            Fruit
          </a>
          <p className="footer__description">Eat Healthy</p>
        </div>
        <div className="footer__data grid">
          <div>
            <h3 className="footer__title">Our Company</h3>
            <ul className="footer__links">
              {["Home", "About", "Contact", "Popular", "Featured"].map(
                (item,index) => (
                  <li key={index}>
                    <a href={`#${item}`} className="footer__link">
                      {item}{" "}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Shop With Us</h3>
            <ul className="footer__links">
              {[
                "Latest Arrivals",
                "Best Sellers",
                "Gift packages",
                "Special Offers",
              ].map((item,index) => (
                <li key={index}>
                  <a href={`#${item}`} className="footer__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Address</h3>
            <ul className="footer__links">
              <li className="footer__info">
                Kathmandu Nepal<br></br>
                44600
              </li>
              <li className="footer__info">10AM - 10PM</li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Social Media</h3>
            <div className="footer__social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="footer__social-link"
                >
                  <i className={link.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <img src={fruit_line_3} alt="image" className="footer__fruit" />
        <img src={branch_1} alt="image" className="footer__branch-1" />
        <img src={branch_2} alt="image" className="footer__branch-2" />
      </div>
      <span className="footer__copy">
        &#169; All Righs Reserved By Padam Thapa
      </span>
    </footer>
  );
};

export default Footer;
