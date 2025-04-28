import React from 'react';

const ChefDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👨‍🏫 Tableau de bord - Chef de Département</h1>
      
      <div style={styles.cardContainer}>
        <Card title="Accéder aux demandes de validation" icon="📥" />
        <Card title="Ajouter des commentaires" icon="💬" />
        <Card title="Signer les documents" icon="🖋️" />
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
    color: '#333'
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    backgroundColor: '#fff5e6',
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

export default ChefDashboard;
