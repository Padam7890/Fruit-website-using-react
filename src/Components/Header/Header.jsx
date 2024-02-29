import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import branch_2 from "../../assets/img/branch-2.png";
import fruit_line_1 from "../../assets/img/fruit-line-1.png";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a className="nav__logo" href="">
            <img className="" src={logo} alt="logo" />
            Fruit
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="">
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="">
                  Popular
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="">
                  Join us
                </a>
              </li>
            </ul>
            {/* close button */}
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>

            <img src={branch_2} alt="" className="nav__img-1" />
            <img src={fruit_line_1} alt="" className="nav__img-2" />
          </div>

          {/* Toogle Button */}
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-4-line"></i>
          </div>



        </nav>
      </header>
    </>
  );
};

export default Header;
