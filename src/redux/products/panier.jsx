import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { annuler } from "../action";

export default function Basket() {
  const pan = useSelector((data) => data.panier);
  const dis = useDispatch();

  const total = pan.reduce((tot, pro) => {
    return tot += pro.prix * pro.quantite;
  }, 0);

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
                <button className="btn btn-danger px-4 py-1 btn-sm" onClick={() => dis(annuler(p))}>
                  Annuler
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <h4 className="text-primary">
          <strong>Total: {total} $</strong>
        </h4>
      </div>
    </div>
  );
}
