import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Enjoy from "./Components/Enjoy/Enjoy";
import About from "./Components/About Us/About";
import Popular from "./Components/Popular/Popular";
import Joinus from "./Components/Join us/Joinus";

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Enjoy />
        <About/>
        <Popular/>
        <Joinus/>
      </main>
    </>
  );
}

export default App;
