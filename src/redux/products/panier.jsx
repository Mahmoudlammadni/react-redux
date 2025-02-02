import { useSelector } from "react-redux";

export default function Basket() {
  const pan = useSelector((data) => data.panier);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-uppercase text-primary">Votre Panier</h2>
      <div className="row justify-content-center">
        {pan.map((p, i) => (
          <div key={i} className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-lg mb-3" style={{ borderRadius: "15px" }}>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-secondary">{p.nom}</h5>
                <p className="card-text">
                  <span className="fw-bold text-success">Prix:</span> {p.prix}$
                </p>
                <p className="card-text">
                  <span className="fw-bold text-danger">Quantité:</span> {p.quantite}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
