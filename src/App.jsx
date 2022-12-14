import React, { useState, useLayoutEffect, useEffect, createContext } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Certificate from './components/Certificate';
import './App.css';
import Contacts from './components/Contacts';

export const context = createContext();

function App() {
  const [color, setColor] = useState('#FF7700');
  const [bgColor, setBgColor] = useState('transparent');
  const [homeRef, setHomeRef] = useState(null);
  const [projectsRef, setProjectsRef] = useState(null);
  const [aboutRef, setAboutRef] = useState(null);
  const [certificateRef, setCertificateRef] = useState(null);
  const [contactsRef, setContactsRef] = useState(null);
  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    setColor('#FF7700');
    setBgColor('transparent');
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  useEffect(() => {
    function handleHeader() {
      if (homeRef !== null && projectsRef !== null && aboutRef !== null && certificateRef !== null && contactsRef !== null) {
        if (scrollPosition === homeRef) {
          setBgColor('transparent');
          setColor('#FF7700');
          return;
        } else if (scrollPosition < projectsRef) {
          setBgColor('#251D3A');
          setColor('#FF7700');
          return;
        } else if (scrollPosition < aboutRef) {
          setBgColor('#FF7700');
          setColor('#251D3A');
        } else if (scrollPosition < certificateRef) {
          setBgColor('#251D3A');
          setColor('#FF7700');
        } else if (scrollPosition < contactsRef) {
          setBgColor('#FF7700');
          setColor('#251D3A');
        } else {
          setBgColor('#251D3A');
          setColor('#FF7700');
        }
      }
    }
    handleHeader();
  }, [scrollPosition]);

  return (
    <context.Provider
      value={{
        color,
        setColor,
        bgColor,
        setBgColor,
        homeRef,
        setHomeRef,
        projectsRef,
        setProjectsRef,
        aboutRef,
        setAboutRef,
        certificateRef,
        setCertificateRef,
        contactsRef,
        setContactsRef,
        scrollPosition,
      }}
    >
      <div>
        <Header />
        <Home />
        <Projects />
        <About />
        <Certificate />
        <Contacts />
      </div>
    </context.Provider>
  );
}

export default App;
