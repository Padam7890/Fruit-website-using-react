import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import branch_2 from "../../assets/img/branch-2.png";
import fruit_line_1 from "../../assets/img/fruit-line-1.png";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Hooks/Theme";
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [showMenu, setShowMenu] = useState();
  const [isHeaderShadowed, setIsHeaderShadowed] = useState(false);
  const [isScrollUp, setisScrollUp] = useState(false);

  const scrollHeader = () => {
    setIsHeaderShadowed(window.scrollY >= 50);
  };

  const scrollUp = () => {
    setisScrollUp(window.scrollY >= 350);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    window.addEventListener("scroll", scrollUp);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  function MenuShowHide() {
    setShowMenu(!showMenu);
  }

  const navlist = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#footer" },
    { title: "Popular", href: "#popular" },
    { title: "Join us", href: "#join" },
  ];

  return (
    <>
      <header
        className={`header ${isHeaderShadowed ? "shadow-header" : ""}`}
        id="header"
      >
        <nav className="nav container">
          <a className="nav__logo" href="">
            <img className="logo" src={logo} alt="logo" />
            Organic Fruit
          </a>
          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              {navlist.map((nav, id) => (
                <li key={id} className="nav__item">
                  <a className="nav__link " href={nav.href}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
            {/* close button */}
            <div onClick={MenuShowHide} className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>

            <img src={branch_2} alt="" className="nav__img-1" />
            <img src={fruit_line_1} alt="" className="nav__img-2" />
          </div>

          <div className="nav__buttons">
            {/* theme Button */}
            <i
              onClick={() => toggleTheme()}
              className={
                theme === "light-theme"
                  ? "ri-moon-line  "
                  : "ri-sun-line text-light "
              }
              id="theme-button"
            ></i>
            {/* Toogle Button */}
            <div onClick={MenuShowHide} className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
        {/* Scroll up */}
        <a
          href=""
          className={`scrollup ${isScrollUp ? "show-scroll" : ""}`}
          id="scroll-up"
        >
          <i className="ri-arrow-up-s-line"></i>
        </a>
      </header>
    </>
  );
};

export default Header;
