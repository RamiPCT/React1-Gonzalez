// src/components/CheckoutForm.jsx
import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase'; // Importa tu configuración de Firebase

const db = getFirestore(app); // Conexión a Firestore

function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'orders'), formData);
      console.log('Compra realizada con ID: ', docRef.id);
      setFormData({ name: '', email: '', address: '', phone: '' }); // Resetea el formulario
    } catch (e) {
      console.error('Error al agregar el documento: ', e);
    }
  };

  return (
    <div className="checkout-form">
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
