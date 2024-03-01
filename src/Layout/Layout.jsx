import React from "react";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Enjoy from "../Components/Enjoy/Enjoy";
import About from "../Components/About Us/About";
import Popular from "../Components/Popular/Popular";
import Joinus from "../Components/Join us/Joinus";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <Enjoy />
        <About />
        <Popular />
        <Joinus />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
