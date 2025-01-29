import { useSelector } from "react-redux";

export default function Todos() {
  const taches = useSelector((state) => state.taches); 

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
                <span className={`badge ${p.etate === "en cours" ? "bg-warning" : "bg-success"}`}>
                  {p.etate}
                </span>
              </div>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
}
