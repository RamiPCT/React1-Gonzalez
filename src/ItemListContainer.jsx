import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Filter from './Filter'; 
import { CartContext } from './CartContext';
import { useContext } from 'react';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState(''); 
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
    const fetchProducts = () => {
      setTimeout(() => {
        setProducts(mockProducts);
        setFilteredProducts(mockProducts); 
      }, 1000);
    };

    fetchProducts();
  }, []);

  
  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter((product) => product.category === selectedCategory);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); 
    }
  }, [selectedCategory, products]);

  
  const categories = ['Corte', 'Tintura', 'Nutricion'];

  return (
    <div className="contenedor">
      <h1>Todos los productos</h1>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {filteredProducts.length > 0 ? (
        <ItemList products={filteredProducts} addToCart={addToCart} />
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;