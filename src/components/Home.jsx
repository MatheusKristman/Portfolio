import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import HomeImage from '../../public/assets/image-home.png';
import { context } from '../App';
import './Home.css';

function Home() {
  const { setHomeRef, scrollPosition } = useContext(context);

  const home = useRef();
  const homeText = useRef();
  const typed = useRef();
  const arrow = useRef();

  useLayoutEffect(() => {
    setHomeRef(home.current.offsetTop);

    const options = {
      strings: ['Olá, meu nome é Matheus. Eu sou um Desenvolvedor Web.'],
      typeSpeed: 50,
    };

    typed.current = new Typed(homeText.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  useEffect(() => {
    window.addEventListener('load', () => {
      arrow.current.style.animation = 'none';
    });

    if (scrollPosition > 0) {
      arrow.current.style.animation = 'arrowDisable 1s ease forwards';
    } else {
      arrow.current.style.animation = 'arrowEnable 1s 4s ease forwards';
    }
  }, [scrollPosition]);

  return (
    <>
      <main ref={home} className='home-container'>
        <div className='home-wrapper'>
          <div className='home-info'>
            <div className='home-title-wrapper'>
              <h1 ref={homeText} className='home-title' />
            </div>
            <span className='home-desc'>Front-End | ReactJS</span>
          </div>
        </div>
        <img className='home-image' src={HomeImage} alt='home-image' />
        <div ref={arrow} className='home-mobile-arrow'>
          <i className='fa-solid fa-chevron-down home-mobile-arrow-icon' />
        </div>
      </main>
    </>
  );
}

export default Home;
