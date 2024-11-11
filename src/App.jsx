// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para cambiar de página

  // Función para actualizar la página actual
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />  {/* Pasamos handleNavigation a Navbar */}
      <Header />
      {currentPage === 'home' && <Home />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'register' && <RegisterPage />}
      <Footer />
    </div>
  );
};

export default App;


