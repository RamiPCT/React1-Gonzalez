import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ToastMessage = () => {
  const { message } = useContext(CartContext);

  if (!message) return null; 

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: 'green',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 1000,
    }}>
      {message}
    </div>
  );
};

export default ToastMessage;