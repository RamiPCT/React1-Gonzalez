import React from 'react';

const Filter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Filtrar por categoría:</h3>
      <select
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        style={{ padding: '5px', fontSize: '16px' }}
      >
        <option value="">Todos</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;