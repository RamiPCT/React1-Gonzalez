
import React from 'react';
import Navbar from './Navbar';
import Contenedor from './Contenedor';
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Contenedor mensaje="Bienvenido a Mi Tienda" />
    </div>
  );
};

export default App;