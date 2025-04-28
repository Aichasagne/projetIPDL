/*import React from 'react';
import React, { useState, useEffect } from "react";

const EtudiantDashboard = () => {
    const etapes = [
        { service: 'Comptabilité', signé: true, emoji: '💰' },
        { service: 'Bibliothèque', signé: true, emoji: '📚' },
        { service: 'Chef de département', signé: true, emoji: '🧑‍🏫' },
        { service: 'Service Scolarité', signé: false, emoji: '🏢' },
      ];
    
      const peutDemanderDiplome = etapes.every(e => e.signé);
    
      return (
        <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen">
          <h2 className="text-2xl font-bold mb-4 text-yellow-700">🎓 Dashboard - Étudiant</h2>
          <div className="space-y-3">
            {etapes.map((e, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white border rounded shadow">
                <span className="text-lg">{e.emoji} {e.service}</span>
                <span className={e.signé ? 'text-green-600 font-semibold' : 'text-gray-400 italic'}>
                  {e.signé ? '✅ Signé' : '⏳ En attente'}
                </span>
              </div>
            ))}
          </div>
          {peutDemanderDiplome && (
            <div className="mt-6 text-center">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                🎓 Demander Diplôme
              </button>
            </div>
          )}
        </div>
      );
    };
    

export default EtudiantDashboard;
*/

/*
import React from 'react';

const EtudiantDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎓 Tableau de bord Étudiant</h1>
      
      <div style={styles.cardContainer}>
        <Card title="Demande de validation" icon="📤" />
        <Card title="Avancement de la validation" icon="📊" />
        <Card title="Signatures obtenues et manquantes" icon="🖋️" />
        <Card title="Notifications & rappels" icon="🔔" />
        <Card title="Disponibilité du diplôme" icon="✅" />
        <Card title="Télécharger documents validés" icon="📁" />
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
    fontSize: '32px',
    color: '#333'
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    backgroundColor: '#f5f5f5',
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

export default EtudiantDashboard;

*/

/*
import React from 'react';

const EtudiantDashboard = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.schoolName}>🎓 École Supérieure Polytechnique (ESP)</h2>
        <button style={styles.logoutButton}>Se déconnecter</button>
      </header>

      <h1 style={styles.title}>Tableau de bord Étudiant</h1>

      <div style={styles.cardContainer}>
        <Card title="Demande de validation" icon="📤" />
        <Card title="Avancement de la validation" icon="📊" />
        <Card title="Signatures obtenues et manquantes" icon="🖋️" />
        <Card title="Notifications & rappels" icon="🔔" />
        <Card title="Disponibilité du diplôme" icon="✅" />
        <Card title="Télécharger documents validés" icon="📁" />
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
    background: 'linear-gradient(to right, #e6f0ff, #b3d1ff)',
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
    fontSize: '34px',
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

export default EtudiantDashboard;
*/




import React, { useState } from 'react';
import { CheckCircle, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const ComptabiliteDashboard = () => {
  const [demandes, setDemandes] = useState([
    { nom: 'Sagne', prenom: 'Aicha', numeroEtudiant: '20231001', signé: false },
    { nom: 'Doumbouya', prenom: 'Sira', numeroEtudiant: '20231002', signé: false }
  ]);
  const [alert, setAlert] = useState(null);

  const signerDemande = (index) => {
    const updated = [...demandes];
    updated[index].signé = true;
    setDemandes(updated);
    setAlert(`Demande de ${updated[index].prenom} ${updated[index].nom} signée avec succès ✅`);
    setTimeout(() => setAlert(null), 3000);
  };

  const demandesRestantes = demandes.filter(d => !d.signé).length;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-cyan-100 to-blue-200 text-gray-800">
      {/* Header */}
      <header className="bg-black text-white py-6 px-6 flex justify-between items-center shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-yellow-400">🎓 École Supérieure Polytechnique</h1>
          <p className="text-md text-blue-200 font-medium">💰 Interface du service Comptabilité</p>
        </div>
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-full flex items-center gap-2 transition"
        >
          <LogOut size={18} /> Se déconnecter
        </button>
      </header>

      {/* Alert */}
      <main className="max-w-6xl mx-auto p-6">
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded mb-4 flex items-center gap-2 shadow"
          >
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>{alert}</span>
          </motion.div>
        )}

        {/* Header de section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-800">📋 Liste des demandes à signer</h2>
          <span className="bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full font-semibold shadow">
            {demandesRestantes} restante(s)
          </span>
        </div>

        {/* Tableau */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-100 text-blue-800 font-semibold">
              <tr>
                <th className="py-3 px-4 text-left">👤 Prénom</th>
                <th className="py-3 px-4 text-left">👥 Nom</th>
                <th className="py-3 px-4 text-left">🆔 Numéro Étudiant</th>
                <th className="py-3 px-4 text-center">✅ Action</th>
              </tr>
            </thead>
            <tbody>
              {demandes.map((d, i) => (
                <tr key={i} className="border-t hover:bg-blue-50 transition">
                  <td className="py-3 px-4">{d.prenom}</td>
                  <td className="py-3 px-4">{d.nom}</td>
                  <td className="py-3 px-4">{d.numeroEtudiant}</td>
                  <td className="py-3 px-4 text-center">
                    {d.signé ? (
                      <span className="text-green-600 font-bold flex items-center justify-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Signé
                      </span>
                    ) : (
                      <button
                        onClick={() => signerDemande(i)}
                        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full font-medium shadow transition"
                      >
                        Signer 💰
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 text-sm mt-10">
        © {new Date().getFullYear()} École Supérieure Polytechnique — Tous droits réservés.
      </footer>
    </div>
  );
};

export default ComptabiliteDashboard;
