import React, { useEffect, useState, useContext, useRef } from 'react';
import { context } from '../App';
import './Header.css';

function Header() {
  const [menu, setMenu] = useState({
    home: true,
    projetos: false,
    sobre: false,
    certificados: false,
    contatos: false,
  });
  const [initialStyle, setInitialStyle] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { color, bgColor, homeRef, projectsRef, aboutRef, certificateRef, contactsRef, scrollPosition } = useContext(context);

  const menuRef = useRef();

  useEffect(() => {
    setInitialStyle({ opacity: 0 });

    setTimeout(() => {
      setInitialStyle({ opacity: 1 });
    }, 1000);
  }, []);

  useEffect(() => {
    if (homeRef !== null && projectsRef !== null && aboutRef !== null && certificateRef !== null && contactsRef !== null) {
      if (scrollPosition < projectsRef) {
        const obj = { ...menu };
        Object.keys(obj).map((key) => {
          if (key === 'home') {
            obj[key] = true;
          } else {
            obj[key] = false;
          }
        });
        setMenu(obj);
      } else if (scrollPosition < aboutRef) {
        const obj = { ...menu };
        Object.keys(obj).map((key) => {
          if (key === 'projetos') {
            obj[key] = true;
          } else {
            obj[key] = false;
          }
        });
        setMenu(obj);
      } else if (scrollPosition < certificateRef) {
        const obj = { ...menu };
        Object.keys(obj).map((key) => {
          if (key === 'sobre') {
            obj[key] = true;
          } else {
            obj[key] = false;
          }
        });
        setMenu(obj);
      } else if (scrollPosition < contactsRef) {
        const obj = { ...menu };
        Object.keys(obj).map((key) => {
          if (key === 'certificados') {
            obj[key] = true;
          } else {
            obj[key] = false;
          }
        });
        setMenu(obj);
      } else {
        const obj = { ...menu };
        Object.keys(obj).map((key) => {
          if (key === 'contatos') {
            obj[key] = true;
          } else {
            obj[key] = false;
          }
        });
        setMenu(obj);
      }
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (isMenuOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isMenuOpen]);

  function handleMenu(option) {
    switch (option) {
      case 'home':
        enableScroll();
        window.scrollTo({
          top: homeRef,
          behavior: 'smooth',
        });
        break;
      case 'projetos':
        enableScroll();
        window.scrollTo({
          top: projectsRef,
          behavior: 'smooth',
        });
        break;
      case 'sobre':
        enableScroll();
        window.scrollTo({
          top: aboutRef,
          behavior: 'smooth',
        });
        break;
      case 'certificados':
        enableScroll();
        window.scrollTo({
          top: certificateRef,
          behavior: 'smooth',
        });
        break;
      case 'contatos':
        enableScroll();
        window.scrollTo({
          top: contactsRef,
          behavior: 'smooth',
        });
        break;
      default:
        break;
    }
    setIsMenuOpen(false);
    menuRef.current.style.animation = 'mobileMenuClose 1s ease forwards';
  }

  function handleMobileMenu() {
    let menu = isMenuOpen;
    menu = !menu;
    setIsMenuOpen(menu);

    if (menu) {
      menuRef.current.style.animation = 'mobileMenuOpen 1s ease forwards';
    } else {
      menuRef.current.style.animation = 'mobileMenuClose 1s ease forwards';
    }
  }

  function disableScroll() {
    document.body.style.overflowY = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflowY = 'auto';
  }

  return (
    <header style={{ backgroundColor: bgColor }} className='header-container'>
      <div className='header-wrapper'>
        <div className='header-image'>
          <svg
            id='e7latdQP5km1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 140 70'
            shapeRendering='geometricPrecision'
            textRendering='geometricPrecision'
          >
            <rect width='135' height='65' rx='0' ry='0' transform='translate(2.5 2.5)' fill='none' stroke={color} strokeWidth='5' />
            <path
              fill={color}
              d='M14.7383,13.3438h5.4785L34.1914,48.1191L48.1367,13.3438h5.5078L36.3008,56h-4.2774L14.7383,13.3438Zm-1.7871,0h4.834l.791,26.0156v16.6406h-5.625v-42.6562Zm37.6172,0h4.8339v42.6562h-5.625v-16.6406l.7911-26.0156Zm20.4199,0v42.6562h-5.6543v-42.6562h5.6543Zm25.7519,0L79.0156,33.2363L69.0547,43.5781l-.9375-6.0351l7.5-8.2618L89.9434,13.3438h6.7968ZM91.291,56L75.5,35.1992l3.3691-4.4824L98.0293,56h-6.7383Z'
            />
            <rect fill={color} width='27' height='5' rx='0' ry='0' transform='translate(102 56)' />
          </svg>
        </div>
        <div className='header-info'>
          <button onClick={handleMobileMenu} className='open-menu-button'>
            <div
              className={isMenuOpen ? 'open-menu-icon clicked' : 'open-menu-icon'}
              style={isMenuOpen ? { backgroundColor: 'transparent' } : { backgroundColor: color }}
            />
          </button>
          <nav ref={menuRef} style={{ animation: 'none' }} className='header-menu'>
            <ul className='header-menu-box'>
              <li onClick={() => handleMenu('home')}>
                <span style={menu.home ? { color: '#ff7700' } : { color: '#fff' }}>Home</span>
                <div className={menu.home ? 'background-item-selected' : 'background-item'} />
              </li>
              <li onClick={() => handleMenu('projetos')}>
                <span style={menu.projetos ? { color: '#E04D01' } : { color: '#fff' }}>Projetos</span>
                <div className={menu.projetos ? 'background-item-selected' : 'background-item'} />
              </li>
              <li onClick={() => handleMenu('sobre')}>
                <span style={menu.sobre ? { color: '#E04D01' } : { color: '#fff' }}>Sobre</span>
                <div className={menu.sobre ? 'background-item-selected' : 'background-item'} />
              </li>
              <li onClick={() => handleMenu('certificados')}>
                <span style={menu.certificados ? { color: '#E04D01' } : { color: '#fff' }}>Certificados</span>
                <div className={menu.certificados ? 'background-item-selected' : 'background-item'} />
              </li>
              <li onClick={() => handleMenu('contatos')}>
                <span style={menu.contatos ? { color: '#E04D01' } : { color: '#fff' }}>Contatos</span>
                <div className={menu.contatos ? 'background-item-selected' : 'background-item'} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
