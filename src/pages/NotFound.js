import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

const NotFound = () => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  // Función para redirigir al usuario a la página de inicio
  const handleGoHome = () => {
    navigate('/'); // Redirige al usuario a la ruta de inicio
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>404 Not Found</h2>
      <p>La página que estás buscando no existe, asi como tu para él/ella.</p>
      
      {/* Botón para regresar al inicio */}
      <button
        onClick={handleGoHome}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Regresar al Inicio
      </button>
    </div>
  );
};

export default NotFound;
