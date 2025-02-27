import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';
import Contact from './Contact'; 
import { CartProvider } from './CartContext';
import ToastMessage from './ToastMessage';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <ToastMessage />
          <Routes>
            <Route path="/" element={<h1>Bienvenido a Mi Tienda</h1>} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/contacto" element={<Contact />} /> 
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;