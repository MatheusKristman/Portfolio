import React, { useContext, useLayoutEffect, useEffect, useRef } from 'react';
import ContactsForm from './ContactsForm';
import { context } from '../App';
import './Contacts.css';

function Contacts() {
  const contactsRef = useRef();

  const { setContactsRef } = useContext(context);

  useLayoutEffect(() => {
    setContactsRef(contactsRef.current.offsetTop);
  }, []);

  return (
    <section ref={contactsRef} className='contacts-container'>
      <div className='contacts-wrapper'>
        <ContactsForm />
        <div className='contacts-social-links'>
          <a href='https://github.com/MatheusKristman' target='_blank' rel='noreferrer noopener' className='contacts-social-wrapper'>
            <i className='fa-brands fa-square-github github-icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/matheus-kristman-07a947171/'
            target='_blank'
            rel='noreferrer noopener'
            className='contacts-social-wrapper'
          >
            <i className='fa-brands fa-linkedin linkedin-icon' />
          </a>
          <a href='https://www.instagram.com/tinzin.exe/' target='_blank' rel='noreferrer noopener' className='contacts-social-wrapper'>
            <i className='fa-brands fa-square-instagram instagram-icon' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
