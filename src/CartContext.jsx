import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(''); 

  
  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
      setMessage(`Se agregaron ${quantity} unidades de "${product.name}" al carrito.`);
    } else {
      
      setCart([...cart, { ...product, quantity }]);
      setMessage(`"${product.name}" se agregó al carrito.`);
    }

    
    setTimeout(() => setMessage(''), 3000);
  };

  
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setMessage(`Producto eliminado del carrito.`);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, message }}>
      {children}
    </CartContext.Provider>
  );
};