import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Enjoy from "./Components/Enjoy/Enjoy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Enjoy />
      </main>
    </>
  );
}

export default App;
