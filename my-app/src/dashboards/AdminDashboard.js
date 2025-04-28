/*import React from 'react';

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛡️ Tableau de bord - Super Administrateur</h1>
      
      <div style={styles.cardContainer}>
        <Card title="Gérer les utilisateurs" icon="👥" />
        <Card title="Superviser les demandes" icon="📊" />
        <Card title="Gérer les accès & rôles" icon="🔐" />
        <Card title="Voir les statistiques générales" icon="📈" />
      </div>
    </div>
  );
};

const Card = ({ title, icon }) => (
  <div style={styles.card}>
    <span style={styles.icon}>{icon}</span>
    <h3>{title}</h3>
  </div>
);

const styles = {
  container: {
    padding: '30px',
    maxWidth: '1200px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '30px',
    color: '#1a1a1a'
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer'
  },
  icon: {
    fontSize: '36px',
    marginBottom: '10px'
  }
};

export default AdminDashboard;
*/

import React from 'react';

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.schoolName}>🎓 École Supérieure Polytechnique</h2>
        <button style={styles.logoutButton}>Se déconnecter</button>
      </header>

      <h1 style={styles.title}>🛡️ Tableau de bord - Super Administrateur</h1>

      <div style={styles.cardContainer}>
        <Card title="Gérer les utilisateurs" icon="👥" />
        <Card title="Superviser les demandes" icon="📊" />
        <Card title="Gérer les accès & rôles" icon="🔐" />
        <Card title="Voir les statistiques générales" icon="📈" />
      </div>
    </div>
  );
};

const Card = ({ title, icon }) => (
  <div
    style={styles.card}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    <span style={styles.icon}>{icon}</span>
    <h3 style={styles.cardTitle}>{title}</h3>
  </div>
);

const styles = {
  container: {
    minHeight: '100vh',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to right, #e0f7ff, #b3d9ff)',
    color: '#000',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  schoolName: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#003366',
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#ffcc00',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#000',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '32px',
    color: '#002244',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '16px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '40px',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '18px',
    color: '#003366',
  },
};

export default AdminDashboard;
