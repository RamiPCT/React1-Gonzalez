// src/components/Cart.jsx
import { useContext } from 'react';
import { CartContext } from './CartContext'; // Necesitas crear este contexto más tarde

function Cart() {
  const { cart, totalAmount } = useContext(CartContext); // Usa el contexto del carrito

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name} - {item.quantity} x ${item.price}</p>
            </div>
          ))}
          <h3>Total: ${totalAmount}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
