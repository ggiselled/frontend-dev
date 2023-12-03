import '../assets/styles/contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export const Contacto = () => {
  return (
    <section id='contacto' className='contacto-container'>
        <h2>CONTACTO</h2>
      <form id="form" className="topBefore">
        <input id="name" type="text" placeholder="NOMBRE" />
        <input id="email" type="text" placeholder="E-MAIL" />
        <textarea id="message" placeholder="MENSAJE"></textarea>
        <button id="submit" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </section>
  );
}
