// src/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Puedes crear este archivo para estilos si lo deseas

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="barbero.png" alt="Logo" /> {/* Asegúrate de que la ruta sea correcta */}
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