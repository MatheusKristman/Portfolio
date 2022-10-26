import React, { useEffect, useRef, useState } from 'react';
import cert1 from '../../public/assets/Certificado-Cod3r.jpg';
import cert2 from '../../public/assets/certificado-nodejs-mongodb.png';
import cert3 from '../../public/assets/certificado-reactjs.png';
import cert4 from '../../public/assets/certificado-firebase.png';
import cert5 from '../../public/assets/certificado-html-css-js.png';
import './CertificateItems.css';

function CertificateItems() {
  return (
    <div className='certificate-links'>
      <div className='certificate-item'>
        <a
          className='certificate'
          href='https://www.udemy.com/certificate/UC-e7b8cbbf-3e46-4cbe-afd3-eb9ab860aaca/'
          style={{ backgroundImage: `url(${cert1})` }}
          target='_blank'
          rel='noreferrer noopener'
        >
          <div className='certificate-color-overlay' />
          <div className='certificate-button'>Ver certificado</div>
        </a>
        <div className='certificate-info'>
          <h3>Curso Web Moderno - Cod3r</h3>
          <p>{'["JavaScript Avançado", "Webpack", "HTTPS", "ReactJS", "NodeJS", "jQuery", "Bootstrap"];'}</p>
          <a
            href='https://www.udemy.com/certificate/UC-e7b8cbbf-3e46-4cbe-afd3-eb9ab860aaca/'
            target='_blank'
            rel='noreferrer noopener'
            className='certificate-link-mobile'
          >
            Ver certificado
          </a>
        </div>
      </div>
      <div className='certificate-item'>
        <a
          className='certificate'
          href='https://certificados.programadorbr.com/certificado/DVWBMK16NO29097'
          style={{ backgroundImage: `url(${cert2})` }}
          target='_blank'
          rel='noreferrer noopener'
        >
          <div className='certificate-color-overlay' />
          <div className='certificate-button'>Ver certificado</div>
        </a>
        <div className='certificate-info'>
          <h3>{'NodeJS e MongoDB (Curso Desenvolvimento Web Full Stack) - ProgramadorBR'}</h3>
          <p>{'["NodeJS", "MongoDB"];'}</p>
          <a
            href='https://certificados.programadorbr.com/certificado/DVWBMK16NO29097'
            target='_blank'
            rel='noreferrer noopener'
            className='certificate-link-mobile'
          >
            Ver certificado
          </a>
        </div>
      </div>
      <div className='certificate-item'>
        <a
          className='certificate'
          href='https://certificados.programadorbr.com/certificado/DVWBMK16NO29097'
          style={{ backgroundImage: `url(${cert3})` }}
          target='_blank'
          rel='noreferrer noopener'
        >
          <div className='certificate-color-overlay' />
          <div className='certificate-button'>Ver certificado</div>
        </a>
        <div className='certificate-info'>
          <h3>{'ReactJS (Curso Desenvolvimento Web Full Stack) - ProgramadorBR'}</h3>
          <p>
            {
              '["ReactJS", "useState", "useContext", "Componentes", "useEffect", "useLayoutEffect", "Reducers", "Redux", "react-hook-form", "react-router", "useCallback", "Create-react-app", "Vite", "refs", "Error Boundaries", "Portals"];'
            }
          </p>
          <a
            href="https://certificados.programadorbr.com/certificado/DVWBMK16NO29097'"
            target='_blank'
            rel='noreferrer noopener'
            className='certificate-link-mobile'
          >
            Ver certificado
          </a>
        </div>
      </div>
      <div className='certificate-item'>
        <a
          className='certificate'
          href='https://certificados.programadorbr.com/certificado/DVWBMK16NO29097'
          style={{ backgroundImage: `url(${cert4})` }}
          target='_blank'
          rel='noreferrer noopener'
        >
          <div className='certificate-color-overlay' />
          <div className='certificate-button'>Ver certificado</div>
        </a>
        <div className='certificate-info'>
          <h3>{'Firebase, jQuery e Bootstrap (Curso Desenvolvimento Web Full Stack) - ProgramadorBR'}</h3>
          <p>{'["Firebase", "jQuery", "Bootstrap"];'}</p>
          <a
            href='https://certificados.programadorbr.com/certificado/DVWBMK16NO29097'
            target='_blank'
            rel='noreferrer noopener'
            className='certificate-link-mobile'
          >
            Ver certificado
          </a>
        </div>
      </div>
      <div className='certificate-item'>
        <a
          className='certificate'
          href='https://certificados.programadorbr.com/certificado/DVWBMK16HT29097'
          style={{ backgroundImage: `url(${cert5})` }}
          target='_blank'
          rel='noreferrer noopener'
        >
          <div className='certificate-color-overlay' />
          <div className='certificate-button'>Ver certificado</div>
        </a>
        <div className='certificate-info'>
          <h3>{'HTML, CSS e JavaScript (Curso Desenvolvimento Web Full Stack) - ProgramadorBR'}</h3>
          <p>{'["HTML", "CSS", "Javascript", "Sintaxe", "Manipulação DOM", "Fetch API", "ES6+", "Escopo", "Prototype", "Hoisting"];'}</p>
          <a
            href='https://certificados.programadorbr.com/certificado/DVWBMK16HT29097'
            target='_blank'
            rel='noreferrer noopener'
            className='certificate-link-mobile'
          >
            Ver certificado
          </a>
        </div>
      </div>
    </div>
  );
}

export default CertificateItems;
