import React, { useRef, useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { context } from '../App';
import { useInView } from 'react-intersection-observer';
import './ContactsForm.css';

const schema = yup.object({
  name: yup.string().required('Este campo é obrigatório.').min(5, 'Favor inserir acima de 5 caracteres.'),
  email: yup.string().required('Este campo é obrigatório.').email('Favor inserir um email valido!'),
  subject: yup.string().required('Este campo é obrigatório.').min(10, 'Favor inserir acima de 10 caracteres.'),
  message: yup.string().required('Este campo é obrigatório.').min(10, 'Favor inserir acima de 10 caracteres.'),
});

function ContactsForm() {
  const [isSending, setIsSending] = useState(false);

  const formRef = useRef();
  const successMessageRef = useRef();
  const formTitle = useRef();
  const typed = useRef();

  const { contactsRef } = useContext(context);

  const { ref: ref, inView: isContactVisible } = useInView();

  useEffect(() => {
    if (isContactVisible) {
      const options = {
        strings: ['Entre em <span><span><</span>contato /></span>'],
        typeSpeed: 50,
      };

      typed.current = new Typed(formTitle.current, options);

      return () => {
        typed.current.destroy();
      };
    }
  }, [isContactVisible]);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    setIsSending(true);

    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);

    fetch('https://getform.io/f/75cd0ad3-f7f3-4def-9287-572cb7073322', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log(response);

        resetField('name');
        resetField('email');
        resetField('subject');
        resetField('message');

        successMessageRef.current.style.display = 'block';
        successMessageRef.current.style.animation = 'messageAnimationIn 1s ease forwards';

        const scroll = contactsRef - 70;

        if (window.innerWidth > 700) {
          window.scrollTo({
            top: contactsRef,
            behavior: 'smooth',
          });
        } else {
          window.scrollTo({
            top: scroll,
            behavior: 'smooth',
          });
        }

        setIsSending(false);

        setTimeout(() => {
          successMessageRef.current.style.animation = 'messageAnimationOut 1s ease forwards';
          setTimeout(() => {
            successMessageRef.current.style.display = 'none';
          }, 1000);
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div ref={ref} className='form-container'>
      <div className='form-text-box'>
        <h2 ref={formTitle} className='form-text-title'></h2>
        <p className='form-text-desc'>
          Se você quiser entrar em contato, conversar sobre um projeto ou somente dizer oi, preencha o formulário abaixo.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} name='EmailForm' ref={formRef}>
        <div ref={successMessageRef} className='form-success-box'>
          <span className='form-success-text'>Mensagem enviada com sucesso</span>
        </div>
        <div className='name-input-wrapper'>
          <label htmlFor='name' className='name-label'>
            Nome
          </label>
          <input type='text' name='name' id='name' className={errors.name ? 'name-input input-error' : 'name-input'} {...register('name')} />
          {errors.name && <small className='input-error-message'>{errors.name.message}</small>}
        </div>
        <div className='email-input-wrapper'>
          <label htmlFor='email' className='email-label'>
            E-mail
          </label>
          <input type='text' name='email' id='email' className={errors.email ? 'email-input input-error' : 'email-input'} {...register('email')} />
          {errors.email && <small className='input-error-message'>{errors.email.message}</small>}
        </div>
        <div className='subject-input-wrapper'>
          <label htmlFor='subject' className='subject-label'>
            Assunto
          </label>
          <input
            type='text'
            name='subject'
            id='subject'
            className={errors.subject ? 'subject-input input-error' : 'subject-input'}
            {...register('subject')}
          />
          {errors.subject && <small className='input-error-message'>{errors.subject.message}</small>}
        </div>
        <div className='message-input-wrapper'>
          <label htmlFor='message' className='message-label'>
            Mensagem
          </label>
          <textarea name='message' id='message' className={errors.message ? 'message-input input-error' : 'message-input'} {...register('message')} />
          {errors.message && <small className='input-error-message'>{errors.message.message}</small>}
        </div>
        <button type='submit' value='Submit' className={isSending ? 'submit-button submit-button-sending' : 'submit-button'}>
          {isSending ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}

export default ContactsForm;
