import React from 'react';
import Contact from './contact';
import { Route, Routes, Link } from 'react-router-dom';
import Add_contact from './add_contact';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap

export default function App_contact() {
  return (
    <div className="container mt-4">
      {/* Navigation avec des boutons Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link to="/c/" className="navbar-brand">Gestion des Contacts</Link>
          <div className="navbar-nav">
            <Link to="/c/" className="nav-link">Contact</Link>
            <Link to="/c/a" className="nav-link">Ajouter</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/a" element={<Add_contact />} />
      </Routes>
    </div>
  );
}