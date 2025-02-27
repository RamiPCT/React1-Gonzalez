import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="barbero.png" alt="Logo" />
        <span>Mi Tienda</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link> 
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/carrito">🛒</Link>
      </div>
    </nav>
  );
};

export default Navbar;