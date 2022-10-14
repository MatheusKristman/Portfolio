import React, { useContext, useLayoutEffect, useRef } from "react";
import HomeImage from "../../public/assets/image-home.png";
import { context } from "../App";
import "./Home.css";

function Home() {
  const { setHomeRef } = useContext(context);

  const home = useRef();

  useLayoutEffect(() => {
    setHomeRef(home.current.offsetTop);
  }, []);

  return (
    <>
      <div ref={home} className="home-container">
        <div className="home-info">
          <h2 className="home-title">Olá, meu nome é Matheus. Eu sou um Desenvolvedor Web.</h2>
          <span className="home-desc">Front-End | ReactJS</span>
        </div>
      </div>
      <img className="home-image" src={HomeImage} alt="home-image" />
    </>
  );
}

export default Home;
