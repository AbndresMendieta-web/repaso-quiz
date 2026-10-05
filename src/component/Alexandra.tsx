import React from 'react';
import heroImage from '../assets/hero.png';

interface AlexandraProps {
  nombre?: string;
  profesion?: string;
  mensaje?: string;
}

export const Alexandra: React.FC<AlexandraProps> = ({
  nombre = "Alexandra",
  profesion = "Desarrolladora Frontend & Estudiante",
  mensaje = "¡Bienvenido a mi componente de repaso en React con TypeScript!"
}) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={heroImage} alt="Hero" style={styles.image} />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>{nombre}</h2>
        <h4 style={styles.subtitle}>{profesion}</h4>
        <p style={styles.text}>{mensaje}</p>
        <button 
          style={styles.button} 
          onClick={() => alert('¡Gracias por interactuar con el componente de Alexandra!')}
        >
          Saludar
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center' as const,
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  content: {
    color: '#333333',
  },
  title: {
    margin: '0 0 5px 0',
    color: '#2c3e50',
  },
  subtitle: {
    margin: '0 0 15px 0',
    color: '#7f8c8d',
    fontSize: '14px',
  },
  text: {
    fontSize: '14px',
    color: '#555555',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export default Alexandra;