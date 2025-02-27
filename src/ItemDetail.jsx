import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, addToCart }) => {
  const handleAddToCart = (quantity) => {
    addToCart(product, quantity); 
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} /> 
    </div>
  );
};

export default ItemDetail;