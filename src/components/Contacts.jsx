import React from "react";
import ContactsForm from "./ContactsForm";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts-container">
      <div className="contacts-wrapper">
        <ContactsForm />
        <div className="contacts-social-links">
          <a href="https://github.com/MatheusKristman" target="_blank" rel="noreferrer noopener" className="contacts-social-wrapper">
            <i className="fa-brands fa-square-github github-icon" />
            <span className="social-desc">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-kristman-07a947171/"
            target="_blank"
            rel="noreferrer noopener"
            className="contacts-social-wrapper"
          >
            <i className="fa-brands fa-linkedin linkedin-icon" />
            <span className="social-desc">Linkedin</span>
          </a>
          <a href="https://www.instagram.com/tinzin.exe/" target="_blank" rel="noreferrer noopener" className="contacts-social-wrapper">
            <i className="fa-brands fa-square-instagram instagram-icon" />
            <span className="social-desc">Instagram</span>
          </a>
        </div>
      </div>
      <span>{"<Contatos />"}</span>
    </div>
  );
}

export default Contacts;
