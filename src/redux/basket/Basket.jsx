import { useSelector } from "react-redux";
import { delete_basket } from "../action";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Basket() {
  const basket = useSelector(state => state.basket);
  const dis = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBasket = basket.filter(item =>
    item.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <input  type="text"  className="form-control w-auto me-2"  placeholder="Chercher un produit..."  onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>

      <h2 className="text-center text-primary mb-4">🛒 Votre Panier</h2>
      <div className="row">
        {filteredBasket.map((b) => (
          <div key={b.id} className="col-md-4 mb-3">
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body">
                <h5 className="card-title text-success">{b.nom}</h5>
                <p className="card-text"><strong>Type :</strong> {b.type}</p>
                <p className="card-text"><strong>Quantité :</strong> {b.quantite}</p>
                <button className="btn btn-outline-danger btn-sm me-2" onClick={() => dis(delete_basket(b.id))}>🗑 Supprimer</button>
                <button className="btn btn-outline-primary btn-sm">✏ Modifier</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
