/*
import React, { useState } from 'react';

const ComptabiliteDashboard = () => {
    const [demandes, setDemandes] = useState([
        { nom: 'Sagne', prenom: 'Aicha', numeroEtudiant: '20231001', signé: false },
        { nom: 'Doumbouya', prenom: 'Sira', numeroEtudiant: '20231002', signé: false }
      ]);
    
      const signerDemande = (index) => {
        const updated = [...demandes];
        updated[index].signé = true;
        setDemandes(updated);
      };
    
      return (
        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 min-h-screen">
          <h2 className="text-2xl font-bold mb-4 text-green-700">💰 Dashboard - Comptabilité</h2>
          <table className="w-full border border-gray-300 bg-white rounded shadow">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2 border">👤 Prénom</th>
                <th className="p-2 border">👥 Nom</th>
                <th className="p-2 border">🆔 Numéro</th>
                <th className="p-2 border">✅ Action</th>
              </tr>
            </thead>
            <tbody>
              {demandes.map((d, i) => (
                <tr key={i} className="text-center hover:bg-green-50">
                  <td className="p-2 border">{d.prenom}</td>
                  <td className="p-2 border">{d.nom}</td>
                  <td className="p-2 border">{d.numeroEtudiant}</td>
                  <td className="p-2 border">
                    {d.signé ? (
                      <span className="text-green-600 font-semibold">✅ Signé</span>
                    ) : (
                      <button
                        onClick={() => signerDemande(i)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
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
      );
    };
export default ComptabiliteDashboard;

*/
/*
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Search } from 'lucide-react';

const ComptabiliteDashboard = () => {
  const [demandes, setDemandes] = useState([
    { nom: 'Sagne', prenom: 'Aicha', numeroEtudiant: '20231001', signé: false },
    { nom: 'Doumbouya', prenom: 'Sira', numeroEtudiant: '20231002', signé: false },
    { nom: 'Fall', prenom: 'Moussa', numeroEtudiant: '20231003', signé: false }
  ]);

  const [alert, setAlert] = useState(null);
  const [search, setSearch] = useState('');

  const signerDemande = (index) => {
    const updated = [...demandes];
    updated[index].signé = true;
    setDemandes(updated);
    setAlert(`✅ ${updated[index].prenom} ${updated[index].nom} a été signé avec succès.`);
    setTimeout(() => setAlert(null), 3000);
  };

  const demandesRestantes = demandes.filter((d) => !d.signé).length;

  const filteredDemandes = demandes.filter(
    (d) =>
      d.prenom.toLowerCase().includes(search.toLowerCase()) ||
      d.nom.toLowerCase().includes(search.toLowerCase()) ||
      d.numeroEtudiant.includes(search)
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-50 via-white to-green-100 font-sans">
      <header className="bg-green-700 text-white py-6 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">🎓 École Supérieure Polytechnique</h1>
          <p className="text-lg mt-1">💰 Tableau de bord - Comptabilité</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center gap-2 shadow"
            >
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>{alert}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h2 className="text-2xl font-semibold text-green-800 flex items-center gap-2">
            📄 Liste des demandes
            <span className="bg-green-200 text-green-700 text-sm px-3 py-1 rounded-full">
              {demandesRestantes} à signer
            </span>
          </h2>

          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="🔍 Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-full border border-green-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Search className="absolute left-3 top-2.5 text-green-500 w-5 h-5" />
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="py-3 px-4 text-left">👤 Prénom</th>
                <th className="py-3 px-4 text-left">👥 Nom</th>
                <th className="py-3 px-4 text-left">🆔 Numéro</th>
                <th className="py-3 px-4 text-center">✅ Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDemandes.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    Aucune demande trouvée.
                  </td>
                </tr>
              ) : (
                filteredDemandes.map((d, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-t hover:bg-green-50 transition-all"
                  >
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
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium shadow transition"
                        >
                          Signer 💰
                        </button>
                      )}
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="bg-green-700 text-white text-center py-4 mt-10 text-sm">
        © {new Date().getFullYear()} ESP - Tous droits réservés.
      </footer>
    </div>
  );
};

export default ComptabiliteDashboard;
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Search } from 'lucide-react';

const ComptabiliteDashboard = () => {
  const [demandes, setDemandes] = useState([
    { nom: 'Sagne', prenom: 'Aicha', numeroEtudiant: '20231001', signé: false },
    { nom: 'Doumbouya', prenom: 'Sira', numeroEtudiant: '20231002', signé: false },
    { nom: 'Fall', prenom: 'Moussa', numeroEtudiant: '20231003', signé: false }
  ]);

  const [alert, setAlert] = useState(null);
  const [search, setSearch] = useState('');

  const signerDemande = (index) => {
    const updated = [...demandes];
    updated[index].signé = true;
    setDemandes(updated);
    setAlert(`✅ ${updated[index].prenom} ${updated[index].nom} a été signé avec succès.`);
    setTimeout(() => setAlert(null), 3000);
  };

  const demandesRestantes = demandes.filter((d) => !d.signé).length;

  const filteredDemandes = demandes.filter(
    (d) =>
      d.prenom.toLowerCase().includes(search.toLowerCase()) ||
      d.nom.toLowerCase().includes(search.toLowerCase()) ||
      d.numeroEtudiant.includes(search)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 font-sans">
      <header className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-6 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">🎓 École Supérieure Polytechnique</h1>
          <p className="text-lg mt-1">💼 Tableau de bord – Service Comptabilité</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-blue-100 border border-blue-300 text-blue-800 px-4 py-3 rounded-lg mb-6 flex items-center gap-2 shadow"
            >
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>{alert}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h2 className="text-2xl font-semibold text-purple-800 flex items-center gap-2">
            📑 Liste des demandes
            <span className="bg-purple-200 text-purple-800 text-sm px-3 py-1 rounded-full">
              {demandesRestantes} à signer
            </span>
          </h2>

          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="🔍 Rechercher un étudiant..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-full border border-purple-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <Search className="absolute left-3 top-2.5 text-purple-500 w-5 h-5" />
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full">
            <thead className="bg-purple-100 text-purple-800">
              <tr>
                <th className="py-3 px-4 text-left">👤 Prénom</th>
                <th className="py-3 px-4 text-left">👥 Nom</th>
                <th className="py-3 px-4 text-left">🆔 Numéro</th>
                <th className="py-3 px-4 text-center">✅ Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDemandes.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    Aucune demande trouvée.
                  </td>
                </tr>
              ) : (
                filteredDemandes.map((d, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-t hover:bg-purple-50 transition-all"
                  >
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
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-medium shadow transition"
                        >
                          Signer 💰
                        </button>
                      )}
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-purple-700 to-blue-700 text-white text-center py-4 mt-10 text-sm">
        © {new Date().getFullYear()} ESP - Tous droits réservés.
      </footer>
    </div>
  );
};

export default ComptabiliteDashboard;
