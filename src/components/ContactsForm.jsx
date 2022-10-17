import React from "react";
import "./ContactsForm.css";

function ContactsForm() {
  return (
    <div className="form-container">
      <form action="https://getform.io/f/75cd0ad3-f7f3-4def-9287-572cb7073322" method="POST" encType="multipart/form-data" name="EmailForm">
        <div className="name-input-wrapper">
          <label htmlFor="name" className="name-label">
            Nome
          </label>
          <input type="text" name="name" id="name" className="name-input" />
        </div>
        <div className="email-input-wrapper">
          <label htmlFor="email" className="email-label">
            E-mail
          </label>
          <input type="email" name="email" id="email" className="email-input" />
        </div>
        <div className="subject-input-wrapper">
          <label htmlFor="subject" className="subject-label">
            Assunto
          </label>
          <input type="text" name="subject" id="subject" className="subject-input" />
        </div>
        <div className="message-input-wrapper">
          <label htmlFor="message" className="message-label">
            Mensagem
          </label>
          <textarea name="message" id="message" className="message-input" />
        </div>
        <button type="submit" value="Submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactsForm;
