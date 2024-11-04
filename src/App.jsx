// src/App.jsx


import Navbar from './components/Navbar';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />  {/* Navbar se muestra debajo del Header */}
      <Header />  {/* Header se muestra primero */}
      <Home />     {/* Aquí se muestra el componente Home con las CardPizza */}
      <Footer /> {/* Agrega el Footer aquí */}
    </div>
  );
};

export default App;

