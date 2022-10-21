import React, { useContext, useLayoutEffect, useEffect, useRef } from "react";
import ContactsForm from "./ContactsForm";
import { useInView } from "react-intersection-observer";
import { context } from "../App";
import "./Contacts.css";

function Contacts() {
  const contactsRef = useRef();
  const contactsTitle = useRef();

  const { setContactsRef } = useContext(context);

  const { ref: ref, inView: isContactVisible } = useInView();

  useLayoutEffect(() => {
    setContactsRef(contactsRef.current.offsetTop);
  }, []);

  useEffect(() => {
    if (isContactVisible) {
      contactsTitle.current.style.animation = "contactsSlideLeft 1.5s ease-in-out forwards";
    } else {
      contactsTitle.current.style.animation = "contactsSlideRight 1s ease-in-out forwards";
    }
  }, [isContactVisible]);

  return (
    <div ref={contactsRef} className="contacts-container">
      <div ref={ref} className="contacts-wrapper">
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
      <span ref={contactsTitle} className="contact-tag">
        {"<Contatos/>"}
      </span>
    </div>
  );
}

export default Contacts;
