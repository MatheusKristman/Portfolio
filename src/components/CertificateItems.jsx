import React, { useEffect, useRef, useState } from "react";
import cert1 from "../../public/assets/Certificado-Cod3r.jpg";
import cert2 from "../../public/assets/certificado-nodejs-mongodb.png";
import cert3 from "../../public/assets/certificado-reactjs.png";
import cert4 from "../../public/assets/certificado-firebase.png";
import cert5 from "../../public/assets/certificado-html-css-js.png";
import "./CertificateItems.css";

function CertificateItems() {
  return (
    <div className="certificate-links">
      <div className="certificate-item">
        <a
          className="certificate"
          href="https://www.udemy.com/certificate/UC-e7b8cbbf-3e46-4cbe-afd3-eb9ab860aaca/"
          style={{ backgroundImage: `url(${cert1})` }}
        >
          <div className="certificate-color-overlay" />
          <div className="certificate-button">Ver certificado</div>
        </a>
        <div className="certificate-info">
          <h3>Curso Web Moderno - Cod3r</h3>
          <p>{"Aqui foi aonde consegui complementar grande parte do meu conhecimento com muitos exercicios. (sempre bom exercitar o cérebro)"}</p>
        </div>
      </div>
      <div className="certificate-item">
        <a
          className="certificate"
          href="https://certificados.programadorbr.com/certificado/DVWBMK16NO29097"
          style={{ backgroundImage: `url(${cert2})` }}
        >
          <div className="certificate-color-overlay" />
          <div className="certificate-button">Ver certificado</div>
        </a>
        <div className="certificate-info">
          <h3>{"NodeJS e MongoDB (Curso Desenvolvimento Web Full Stack) - ProgramadorBR"}</h3>
          <p>{"Esse foi o que me ajudou a entender melhor como funciona a parte Back-end e integração com o Front-end."}</p>
        </div>
      </div>
      <div className="certificate-item">
        <a
          className="certificate"
          href="https://certificados.programadorbr.com/certificado/DVWBMK16NO29097"
          style={{ backgroundImage: `url(${cert3})` }}
        >
          <div className="certificate-color-overlay" />
          <div className="certificate-button">Ver certificado</div>
        </a>
        <div className="certificate-info">
          <h3>{"ReactJS (Curso Desenvolvimento Web Full Stack) - ProgramadorBR"}</h3>
          <p>{"Já esse foi o primeiro framework que aprendi na minha vida, sempre achei incrível como eles facilitam tanto a nossa vida."}</p>
        </div>
      </div>
      <div className="certificate-item">
        <a
          className="certificate"
          href="https://certificados.programadorbr.com/certificado/DVWBMK16NO29097"
          style={{ backgroundImage: `url(${cert4})` }}
        >
          <div className="certificate-color-overlay" />
          <div className="certificate-button">Ver certificado</div>
        </a>
        <div className="certificate-info">
          <h3>{"Firebase, jQuery e Bootstrap (Curso Desenvolvimento Web Full Stack) - ProgramadorBR"}</h3>
          <p>{"Com esse consegui entender melhor como um banco de dados funciona, alem de alguns frameworks para agilizarem o processo."}</p>
        </div>
      </div>
      <div className="certificate-item">
        <a
          className="certificate"
          href="https://certificados.programadorbr.com/certificado/DVWBMK16HT29097"
          style={{ backgroundImage: `url(${cert5})` }}
        >
          <div className="certificate-color-overlay" />
          <div className="certificate-button">Ver certificado</div>
        </a>
        <div className="certificate-info">
          <h3>{"HTML, CSS e JavaScript (Curso Desenvolvimento Web Full Stack) - ProgramadorBR"}</h3>
          <p>
            {
              "Foi com esse que entrei no mundo da Programação, que criei meu primeiro site, que quebrei muito a cabeça para entender como a linguagem funciona e ele que me mostrou que posso fazer a diferença para as pessoas com o meu código."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default CertificateItems;
