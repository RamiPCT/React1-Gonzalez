import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contenedor">
      <h1>Contacto</h1>
      <p>¡Estamos aquí para ayudarte! Puedes contactarnos a través de los siguientes medios:</p>
      <ul>
        <li>
          <strong>Instagram:</strong>{' '}
          <a href="https://www.instagram.com/Henkopadua" target="_blank" rel="noopener noreferrer">
            @Henkopadua
          </a>
        </li>
        <li>
          <strong>Teléfono:</strong> 1125807794
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/ramiro-gonzalez" target="_blank" rel="noopener noreferrer">
            Ramiro Gonzalez
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;