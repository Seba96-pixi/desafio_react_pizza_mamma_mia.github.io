// components/RegisterPage.js
import { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios');
      return;
    }
    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }
    setMessage('Registro exitoso');
  };

  return (
    <div style={styles.registerContainer}>
      <h2 style={styles.header}>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Confirmar contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitBtn}>Registrar</button>
      </form>
      {message && <p style={message.includes('exitoso') ? styles.successMessage : styles.errorMessage}>{message}</p>}
    </div>
  );
};

const styles = {
  registerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '2rem auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#333',
    marginBottom: '1.5rem',
  },
  formGroup: {
    width: '100%',
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  submitBtn: {
    width: '100%',
    padding: '0.7rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '1rem',
  },
  successMessage: {
    marginTop: '1rem',
    color: '#28a745',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage: {
    marginTop: '1rem',
    color: '#dc3545',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default RegisterPage;
