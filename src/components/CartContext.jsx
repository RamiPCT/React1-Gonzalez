// src/components/CartContext.jsx
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItem = (item) => {
    setCart([...cart, item]);
    setTotalAmount(totalAmount + item.price * item.quantity);
  };

  return (
    <CartContext.Provider value={{ cart, totalAmount, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
