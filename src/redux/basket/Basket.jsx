import { useSelector } from "react-redux";

export default function Basket() {
  const basket = useSelector(state => state.basket);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">🛒 Votre Panier</h2>
      <div className="row">
        {basket.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body">
                <h5 className="card-title text-success">{item.nom}</h5>
                <p className="card-text"><strong>Type :</strong> {item.type}</p>
                <p className="card-text"><strong>Quantité :</strong> {item.quantite}</p>
                <button className="btn btn-outline-danger btn-sm me-2">🗑 Supprimer</button>
                <button className="btn btn-outline-primary btn-sm">✏ Modifier</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
