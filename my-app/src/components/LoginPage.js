
/*
// src/LoginPage.js
import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (email && password) {
      setMessage('Connexion simulée réussie !');
    } else {
      setMessage('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Connexion</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>
        Se connecter
      </button>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: '100px auto',
    padding: 30,
    borderRadius: 10,
    boxShadow: '0 0 10px #ccc',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 5,
    border: '1px solid #ccc'
  },
  button: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer'
  },
  message: {
    marginTop: 15,
    color: 'green',
    fontWeight: 'bold'
  }
};

export default LoginPage;

*/

import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (email && password) {
      setMessage('✅ Connexion simulée réussie !');
    } else {
      setMessage('⚠️ Veuillez remplir tous les champs.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.schoolTitle}>🎓 École Supérieure Polytechnique (ESP)</h1>
      </div>

      <div style={styles.container}>
        <h2 style={styles.title}>Connexion</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Se connecter
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #d0eaff, #b3d1ff)',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    padding: '30px 20px 10px',
  },
  schoolTitle: {
    color: '#002244',
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    width: '90%',
    maxWidth: '400px',
    marginTop: '30px',
    textAlign: 'center',
  },
  title: {
    fontSize: '22px',
    marginBottom: '25px',
    color: '#003366',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  message: {
    marginTop: '20px',
    fontWeight: 'bold',
    color: '#1a6600',
  },
};

export default LoginPage;
