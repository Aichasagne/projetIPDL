import React, { useState } from 'react';

const BibliothequeDashboard = () => {
  const [demandes, setDemandes] = useState([
    { nom: 'Sow', prenom: 'Ali', numeroEtudiant: '20231001', comptaOk: true, signé: false },
    { nom: 'Diop', prenom: 'Fatou', numeroEtudiant: '20231002', comptaOk: false, signé: false }
  ]);

  const signerDemande = (index) => {
    const updated = [...demandes];
    updated[index].signé = true;
    setDemandes(updated);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">📚 Dashboard - Bibliothèque</h2>
      <table className="w-full border border-gray-300 bg-white rounded shadow">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border">👤 Prénom</th>
            <th className="p-2 border">👥 Nom</th>
            <th className="p-2 border">🆔 Numéro</th>
            <th className="p-2 border">✅ Action</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((d, i) => (
            <tr key={i} className="text-center hover:bg-blue-50">
              <td className="p-2 border">{d.prenom}</td>
              <td className="p-2 border">{d.nom}</td>
              <td className="p-2 border">{d.numeroEtudiant}</td>
              <td className="p-2 border">
                {d.comptaOk ? (
                  d.signé ? (
                    <span className="text-blue-600 font-semibold">📘 Signé</span>
                  ) : (
                    <button
                      onClick={() => signerDemande(i)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Signer 📚
                    </button>
                  )
                ) : (
                  <span className="text-gray-400 italic">En attente de la comptabilité ⏳</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BibliothequeDashboard;
