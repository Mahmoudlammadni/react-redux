import { useSelector } from "react-redux";
import { addp } from "../action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Add_produits() {
  const id = useSelector((data) => (data.products.length ? data.products[data.products.length - 1].id + 1 : 1));
  const dis = useDispatch();
  const nav = useNavigate();

  const [nom, setnom] = useState('');
  const [prix, setprix] = useState('');
  const [quantite, setquantite] = useState('');

  function add(e) {
    e.preventDefault();
    const ob = { id: parseInt(id), nom, prix, quantite };
    dis(addp(ob));
    nav('/p/');
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center mb-4 text-uppercase font-weight-bold">Ajouter un Produit</h2>
          <form onSubmit={add} className="bg-light p-4 rounded-3 shadow-lg">
            <div className="mb-3">
              <label htmlFor="nom" className="form-label font-weight-bold text-secondary">Nom du Produit</label>
              <input type="text" className="form-control shadow-sm" id="nom" placeholder="Nom" value={nom}onChange={(e) => setnom(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label htmlFor="prix" className="form-label font-weight-bold text-secondary">Prix</label>
              <input type="number" className="form-control shadow-sm" id="prix" placeholder="Prix" value={prix}onChange={(e) => setprix(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label htmlFor="quantite" className="form-label font-weight-bold text-secondary">Quantité</label>
              <input  type="number"  className="form-control shadow-sm"  id="quantite"  placeholder="Quantité"  value={quantite} onChange={(e) => setquantite(e.target.value)}  required />
            </div>

            <button type="submit" className="btn btn-success w-100 py-2 mt-3">Ajouter Produit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
