import React, { useState, useLayoutEffect, useEffect, createContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";

export const context = createContext();

function App() {
  const [color, setColor] = useState("#FF7700");
  const [bgColor, setBgColor] = useState("transparent");
  const [homeRef, setHomeRef] = useState(null);
  const [projectsRef, setProjectsRef] = useState(null);
  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    setColor("#FF7700");
    setBgColor("transparent");
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  useEffect(() => {
    function handleHeader() {
      if (scrollPosition === homeRef) {
        setBgColor("transparent");
        return;
      } else if (scrollPosition < projectsRef) {
        setBgColor("#251D3A");
        setColor("#FF7700");
        return;
      } else {
        // setBgColor("#FF7700");
        // setColor("#251D3A");
        return;
      }
    }
    handleHeader();
  }, [scrollPosition]);

  return (
    <context.Provider value={{ color, setColor, bgColor, setBgColor, setHomeRef, setProjectsRef }}>
      <div>
        <Header />
        <Home />
        <Projects />
      </div>
    </context.Provider>
  );
}

export default App;
