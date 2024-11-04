// src/components/Header.js

import pizzaImage from '../assets/images/Header.jpg';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>¡Pizzeria Mamma Mia!</h1>
        <p style={styles.subtitle}>Tenemos las mejores pizzas que podrás encontrar</p>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${pizzaImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', // Puedes ajustar la altura según prefieras
    width: '100vw',
    color: 'white',
    position: 'relative',
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para mejorar legibilidad
  },
  title: {
    fontSize: '2.5rem',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.2rem',
    margin: '10px 0 0 0',
  },
};

export default Header;


