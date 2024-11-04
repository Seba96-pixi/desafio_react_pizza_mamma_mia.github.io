// src/components/Footer.jsx

const Footer = () => {
  // Estilos en un objeto
  const footerStyle = {
    backgroundColor: 'black', // Fondo negro
    color: 'white',            // Letras blancas
    textAlign: 'center',       // Centra el texto
    padding: '1rem 0',        // Espaciado vertical
    position: 'relative',      // Asegura que el footer se sitúe correctamente
    bottom: 0,                 // Asegura que esté en la parte inferior si es necesario
    width: '100%',            // Asegura que ocupe el ancho completo
  };

  return (
    <footer style={footerStyle}>
      <p>©2021 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
