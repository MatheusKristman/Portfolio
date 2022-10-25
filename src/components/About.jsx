import React, { useRef, useContext, useLayoutEffect, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { context } from '../App';
import './About.css';
import codeDesktop from '../../public/assets/code-background.png';

function About() {
  const aboutRef = useRef();
  const aboutTitle = useRef();

  const { ref: ref, inView: isAboutVisible } = useInView();

  const { setAboutRef } = useContext(context);

  useLayoutEffect(() => {
    setAboutRef(aboutRef.current.offsetTop);
  }, []);

  useEffect(() => {
    if (isAboutVisible) {
      aboutTitle.current.style.animation = 'aboutSlideLeft 1.5s ease-in-out forwards';
    } else {
      aboutTitle.current.style.animation = 'aboutSlideRight 1s ease-in-out forwards';
    }
  }, [isAboutVisible]);

  return (
    <section ref={aboutRef} className='about-container'>
      <div ref={ref} className='about-wrapper'>
        <div className='about-info'>
          <h2>Um pouco sobre mim</h2>
          <p>
            Desde a infância fui muito conectado com a tecnologia, mas somente em 2021 descobri a minha verdadeira paixão: a programação. Desde então,
            busco encontrar novos meios de ajudar pessoas e negócios a deixarem a sua marca no mundo digital.
          </p>
          <p>Constantemente estou criando coisas novas, buscando aperfeiçoar meus conhecimentos e a aprender novas linguagens.</p>
          <p>
            Atualmente atuo no desenvolvimento Front-end e frameworks como ReactJS, além de conhecimento em Backend como NodeJS e MongoDB, focado no
            Clean Code para uma boa estrutura de código e performance.
          </p>
        </div>
        <div ref={aboutTitle} className='about-tag'>
          <span className='about-tag-span'>{'</Sobre>'}</span>
        </div>
      </div>
      <img className='about-background' src={codeDesktop} alt='code' />
    </section>
  );
}

export default About;
