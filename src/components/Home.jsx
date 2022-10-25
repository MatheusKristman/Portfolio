import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import HomeImage from '../../public/assets/image-home.png';
import { context } from '../App';
import './Home.css';

function Home() {
  const { setHomeRef } = useContext(context);

  const home = useRef();
  const homeText = useRef();
  const typed = useRef();

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
      </main>
    </>
  );
}

export default Home;
