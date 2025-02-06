
import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="barbero.png" alt="Logo" /> 
        <span>Mi Tienda</span>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <div className="navbar-cart">
        <a href="/carrito">🛒</a>
      </div>
    </nav>
  );
};

export default Navbar;