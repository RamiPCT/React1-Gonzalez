import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            <Link to={`/item/${product.id}`}>{product.name}</Link>
          </h2>
          <p>Precio: ${product.price}</p>
          <button onClick={() => addToCart(product, 1)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;