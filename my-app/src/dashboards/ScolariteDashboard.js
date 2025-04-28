/*
import React from 'react';

const ScolariteDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📚 Tableau de bord - Service Scolarité</h1>
      
      <div style={styles.cardContainer}>
        <Card title="Accéder aux demandes de validation" icon="📩" />
        <Card title="Vérifier les informations académiques" icon="✅" />
        <Card title="Signer les documents" icon="🖋️" />
        <Card title="Notifier la disponibilité du diplôme" icon="🔔" />
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
    color: '#2b2b2b'
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    backgroundColor: '#e7f0fd',
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

export default ScolariteDashboard;
*/

/*


import React, { useState } from 'react';

const DashboardScolarite = () => {
  const [showDemandes, setShowDemandes] = useState(false);

  // Exemple de données fictives
  const demandes = [
    { prenom: 'Ali', nom: 'Sow', classe: 'M1 GLSI', numeroEtudiant: '20231001' },
    { prenom: 'Fatou', nom: 'Diop', classe: 'M1 GLSI', numeroEtudiant: '20231002' },
  ];

  const handleSign = (numeroEtudiant) => {
    alert(`Signature envoyée pour l'étudiant ${numeroEtudiant}`);
    // ici tu pourras appeler l'API backend plus tard
  };

  const handleNotify = (numeroEtudiant) => {
    alert(`Notification envoyée à l'étudiant ${numeroEtudiant}`);
    // ici tu pourras appeler l'API backend plus tard
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard - Service Scolarité</h2>

      <button
        onClick={() => setShowDemandes(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Accéder aux demandes de validation
      </button>

      {showDemandes && (
        <div className="mt-6">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Prénom</th>
                <th className="p-2 border">Nom</th>
                <th className="p-2 border">Classe</th>
                <th className="p-2 border">Numéro Étudiant</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {demandes.map((demande, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{demande.prenom}</td>
                  <td className="p-2 border">{demande.nom}</td>
                  <td className="p-2 border">{demande.classe}</td>
                  <td className="p-2 border">{demande.numeroEtudiant}</td>
                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => handleSign(demande.numeroEtudiant)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Signer
                    </button>
                    <button
                      onClick={() => handleNotify(demande.numeroEtudiant)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Notifier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardScolarite;
*/


import React from 'react';

const ScolariteDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📚 Tableau de bord - Service Scolarité</h1>
      
      <div style={styles.cardContainer}>
        <Card title="Accéder aux demandes de validation" icon="📩" />
        <Card title="Vérifier les informations académiques" icon="✅" />
        <Card title="Signer les documents" icon="🖋️" />
        <Card title="Notifier la disponibilité du diplôme" icon="🔔" />
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
    color: '#2b2b2b'
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    backgroundColor: '#e7f0fd',
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

export default ScolariteDashboard;
