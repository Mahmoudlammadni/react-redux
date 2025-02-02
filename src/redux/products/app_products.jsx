import { Routes, Route, Link } from "react-router-dom";
import Products from "./products";
import Add_produits from "./add_products";
import Pro_mody from "./modifypro";
import Basket from "./panier";
export default function App_products() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light mb-4" style={{ background: 'linear-gradient(90deg, #4e73df, #1cc88a)' }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex justify-content-between w-100">
              <Link to="/p/" className="navbar-brand text-white fw-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Home</Link>
              <div className="navbar-nav mx-auto d-flex">
                <Link to="/p/" className="nav-link text-white px-4 py-2 rounded-3 hover-shadow" style={{ fontFamily: "'Poppins', sans-serif" }}>Produits</Link>
                <Link to="/p/a" className="nav-link text-white px-4 py-2 rounded-3 hover-shadow" style={{ fontFamily: "'Poppins', sans-serif" }}>Ajouter</Link>
                <Link to="/p/pa" className="nav-link text-white px-4 py-2 rounded-3 hover-shadow" style={{ fontFamily: "'Poppins', sans-serif" }}>Panier</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/m/:id" element={<Pro_mody />} />
        <Route path="/a" element={<Add_produits />} />
        <Route path="/pa" element={<Basket />} />
      </Routes>
    </div>
  );
}
