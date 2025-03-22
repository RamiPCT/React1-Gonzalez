import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { CartContext } from './CartContext'; 
import { useContext } from 'react';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams(); 
  const { addToCart } = useContext(CartContext); 

  
  const mockProducts = [
    { id: 1, name: 'Corte moderno', price: 6000, category: 'Corte', description: 'Corte moderno o clásico' },
    { id: 2, name: 'Tintura directa', price: 15000, category: 'Tintura', description: 'Tintura directa, carta de colores KCB' },
    { id: 3, name: 'Baño de crema', price: 7000, category: 'Nutricion', description: 'Baños de crema, shocks o tratamientos unidosis' },
    { id: 4, name: 'Corte clásico', price: 6000, category: 'Corte', description: 'Corte clásico para caballeros' },
    { id: 5, name: 'Tintura fantasía', price: 7500, category: 'Tintura', description: 'Tintura en colores fantasía' },
    { id: 6, name: 'Tratamiento unidosis', price: 8000, category: 'Nutricion', description: 'Tratamiento unidosis para cabello dañado' },
  ];

  
  useEffect(() => {
    const fetchProduct = () => {
      const selectedProduct = mockProducts.find((product) => product.id === Number(itemId));
      setTimeout(() => setProduct(selectedProduct), 1000); 
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className="contenedor">
      <h1>Detalle del producto</h1>
      {product ? (
        <ItemDetail product={product} addToCart={addToCart} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;