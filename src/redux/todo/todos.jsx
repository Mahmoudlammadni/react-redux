import { useSelector } from "react-redux";
import { delet } from "../../redux/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Todos() {
  const taches = useSelector((state) => state.taches); 
  const dis = useDispatch();

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Liste des Tâches</h2>
      
      <div className="row">
        {taches.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
          <div className="card shadow-sm border-0 rounded">
            <div className="card-body">
              <h5 className="card-title text-success">{p.titre}</h5>
              <p className="card-text">
                <strong>Date:</strong> {p.date}
              </p>
              <div className="d-flex align-items-center">
                <span className={`badge ${p.etat === "en cours" ? "bg-warning" : "bg-success"} me-2`}>
                  {p.etat}
                </span>
                <button className="btn btn-danger btn-sm me-2" onClick={() => dis(delet(p.id))}>
                  supprimer
                </button>
              <Link to={`mod/${p.id}`} className="btn btn-success btn-sm">Modifier</Link>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}