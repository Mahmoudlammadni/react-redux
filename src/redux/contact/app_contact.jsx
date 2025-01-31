import React from 'react';
import Contact from './contact';
import { Route, Routes, Link } from 'react-router-dom';
import Add_contact from './add_contact';
import Mody_contact from './modify';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function App_contact() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link to="/c/" className="navbar-brand">Gestion des Contacts</Link>
          <div className="navbar-nav">
            <Link to="/c/" className="nav-link">Contact</Link>
            <Link to="/c/a" className="nav-link">Ajouter</Link>
          
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/a" element={<Add_contact />} />
        <Route path="/m/:id" element={<Mody_contact />} />
      </Routes>
    </div>
  );
}