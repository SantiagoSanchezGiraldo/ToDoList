// otro.jsx
import React from 'react';
import './Otro.css'; // Importa los estilos CSS

const Otro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Mensaje enviado');
  };

  return (
    <div className="otro-container">
      <h1>Otra pantalla</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default Otro;
