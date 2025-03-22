import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Actualizado: Importamos Routes y Route
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';
import CheckoutForm from './CheckoutForm'; // Asegúrate de tener este componente en tu proyecto

function App() {
  return (
    <div>
      <NavBar /> {/* Navegación principal */}

      <Routes> {/* Aquí cambiamos Switch por Routes */}
        <Route path="/" element={<ItemListContainer />} /> {/* Ruta principal del catálogo */}
        <Route path="/product/:id" element={<ItemDetailContainer />} /> {/* Detalle de producto */}
        <Route path="/cart" element={<Cart />} /> {/* Carrito de compras */}
        <Route path="/checkout" element={<CheckoutForm />} /> {/* Formulario de checkout */}
      </Routes>
    </div>
  );
}

export default App;
