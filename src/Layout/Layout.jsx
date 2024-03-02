import React, { useContext, useEffect } from "react";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Enjoy from "../Components/Enjoy/Enjoy";
import About from "../Components/About Us/About";
import Popular from "../Components/Popular/Popular";
import Joinus from "../Components/Join us/Joinus";
import Footer from "../Components/Footer/Footer";
import { ThemeContext } from "../Hooks/Theme";
import Slide from "../Utility/Slide"




const Layout = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <div
     className={theme}>
      <Header />
      <main className="main">
        <Slide>
        <Home />
        </Slide>
        <Slide>
        <Enjoy />
        </Slide>
        <Slide>
        <About />
        </Slide>
        <Slide>
        <Popular />
        </Slide>
        <Slide>
        <Joinus />
        </Slide>
      </main>
      <Slide>
        <Footer />
      </Slide>
    </div>
  );
};

export default Layout;
