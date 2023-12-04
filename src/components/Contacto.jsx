import '../assets/styles/contacto.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rv7e63w', 'template_rq2sr4v', form.current, 'CW09GJt2apYA0-6w1')
      e.target.reset()
    };
  return (
    <section id='contacto' className='contacto-container'>
        <h2>CONTACTO</h2>
      <form ref={form} onSubmit={sendEmail} id="form" className="topBefore">
        <input id="name" name='name' type="text" placeholder="NOMBRE" />
        <input id="email" name='email'ctype="text" placeholder="E-MAIL" />
        <textarea id="message" name='message' placeholder="MENSAJE"></textarea>
        <button id="submit" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </section>
  );
}
