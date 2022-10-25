import React, { useEffect, useState, useRef, useLayoutEffect, useContext } from 'react';
import Project1D from '/public/assets/Projeto-1-desktop.png';
import Project2D from '/public/assets/Projeto-2-desktop.png';
import Project3D from '/public/assets/Projeto-3-desktop.png';
import Project4D from '/public/assets/Projeto-4-desktop.png';
import Project5D from '/public/assets/Projeto-5-desktop.png';
import Project6D from '/public/assets/Projeto-6-desktop.png';
import { useInView } from 'react-intersection-observer';
import { context } from '../App';
import './Projects.css';

function Projects() {
  const [linkStyle1, setLinkStyle1] = useState({});
  const [linkStyle2, setLinkStyle2] = useState({});
  const [linkStyle3, setLinkStyle3] = useState({});
  const [linkStyle4, setLinkStyle4] = useState({});
  const [linkStyle5, setLinkStyle5] = useState({});
  const [linkStyle6, setLinkStyle6] = useState({});

  const { ref: projects, inView: isProjectsVisible } = useInView();

  const projectTitle = useRef();
  const projectContainer = useRef();

  const { setProjectsRef } = useContext(context);

  useLayoutEffect(() => {
    setProjectsRef(projectContainer.current.offsetTop);
  }, []);

  useEffect(() => {
    if (isProjectsVisible) {
      projectTitle.current.style.animation = 'slideRight 1.5s ease-in-out forwards';
    } else {
      projectTitle.current.style.animation = 'projectOff 1s ease-in-out forwards';
    }
  }, [isProjectsVisible]);

  function mouseOutDiv(element) {
    if (window.innerWidth > 700) {
      if (element === '1') {
        setLinkStyle1({ animation: 'fadeOut 0.5s ease forwards' });
      }

      if (element === '2') {
        setLinkStyle2({ animation: 'fadeOut 0.5s ease forwards' });
      }

      if (element === '3') {
        setLinkStyle3({ animation: 'fadeOut 0.5s ease forwards' });
      }

      if (element === '4') {
        setLinkStyle4({ animation: 'fadeOut 0.5s ease forwards' });
      }

      if (element === '5') {
        setLinkStyle5({ animation: 'fadeOut 0.5s ease forwards' });
      }

      if (element === '6') {
        setLinkStyle6({ animation: 'fadeOut 0.5s ease forwards' });
      }
    }
  }

  function mouseEnterDiv(element) {
    if (window.innerWidth > 700) {
      if (element === '1') {
        setLinkStyle1({ animation: 'fadeIn 0.5s ease forwards' });
      }

      if (element === '2') {
        setLinkStyle2({ animation: 'fadeIn 0.5s ease forwards' });
      }

      if (element === '3') {
        setLinkStyle3({ animation: 'fadeIn 0.5s ease forwards' });
      }

      if (element === '4') {
        setLinkStyle4({ animation: 'fadeIn 0.5s ease forwards' });
      }

      if (element === '5') {
        setLinkStyle5({ animation: 'fadeIn 0.5s ease forwards' });
      }

      if (element === '6') {
        setLinkStyle6({ animation: 'fadeIn 0.5s ease forwards' });
      }
    }
  }

  return (
    <section onScroll={() => console.log('scrollado')} ref={projectContainer} className='projects-container'>
      <div className='projects-info'>
        <span ref={projectTitle} className='projects-title'>
          {'</Projetos>'}
        </span>
      </div>
      <div ref={projects} className='projects-grid'>
        <div onMouseEnter={() => mouseEnterDiv('1')} onMouseLeave={() => mouseOutDiv('1')} className='projects-item'>
          <img src={Project1D} alt='projeto-1' />
          <a style={linkStyle1} href='https://alura-geek-self-nine.vercel.app/' target='_blank' rel='noreferrer noopener'>
            Ver projeto
          </a>
        </div>
        <div onMouseEnter={() => mouseEnterDiv('2')} onMouseLeave={() => mouseOutDiv('2')} className='projects-item'>
          <img src={Project2D} alt='projeto-2' />
          <a style={linkStyle2} href='https://ecoleta-kappa.vercel.app/' target='_blank' rel='noreferrer noopener'>
            Ver projeto
          </a>
        </div>
        <div onMouseEnter={() => mouseEnterDiv('3')} onMouseLeave={() => mouseOutDiv('3')} className='projects-item'>
          <img src={Project3D} alt='projeto-3' />
          <a style={linkStyle3} href='https://space-tourism-steel-nine.vercel.app/' target='_blank' rel='noreferrer noopener'>
            Ver projeto
          </a>
        </div>
        <div onMouseEnter={() => mouseEnterDiv('4')} onMouseLeave={() => mouseOutDiv('4')} className='projects-item'>
          <img src={Project4D} alt='projeto-4' />
          <a style={linkStyle4} href='https://matheuskristman.github.io/Sunnyside-Agency-Landing-Page/' target='_blank' rel='noreferrer noopener'>
            Ver projeto
          </a>
        </div>
        <div onMouseEnter={() => mouseEnterDiv('5')} onMouseLeave={() => mouseOutDiv('5')} className='projects-item'>
          <img src={Project5D} alt='projeto-5' />
          <a style={linkStyle5} href='https://matheuskristman.github.io/Jogo-da-Forca/' target='_blank' rel='noreferrer noopener'>
            Ver projeto
          </a>
        </div>
        <div onMouseEnter={() => mouseEnterDiv('6')} onMouseLeave={() => mouseOutDiv('6')} className='projects-item'>
          <img src={Project6D} alt='projeto-6' />
          <a style={linkStyle6} href='https://matheuskristman.github.io/Fylo-Landing-Page/' target='_blank' rel='noreferrer noopener'>
            Ver projeto
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
