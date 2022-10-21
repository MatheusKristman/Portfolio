import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import HomeImage from '../../public/assets/image-home.png';
import { context } from '../App';
import './Home.css';

function Home() {
  const { setHomeRef } = useContext(context);

  const home = useRef();
  const homeTitle = useRef();

  const { ref: ref, inView: isHomeVisible } = useInView();

  useLayoutEffect(() => {
    setHomeRef(home.current.offsetTop);
  }, []);

  useEffect(() => {
    if (isHomeVisible) {
      homeTitle.current.style.animation = 'homeSlideRight 1.5s ease-in-out forwards';
    } else {
      homeTitle.current.style.animation = 'homeSlideLeft 1s ease-in-out forwards';
    }
  }, [isHomeVisible]);

  return (
    <>
      <div ref={home} className='home-container'>
        <div ref={ref} className='home-info'>
          <h2 className='home-title'>Olá, meu nome é Matheus. Eu sou um Desenvolvedor Web.</h2>
          <span className='home-desc'>Front-End | ReactJS</span>
        </div>
        <span ref={homeTitle} className='home-tag'>
          {'<Home/>'}
        </span>
      </div>
      <img className='home-image' src={HomeImage} alt='home-image' />
    </>
  );
}

export default Home;
