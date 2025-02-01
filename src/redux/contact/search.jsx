import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { deletc } from "../action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Con_search() {
    const { nom } = useParams();
    const contacts = useSelector((data) => data.contact);
    const dis = useDispatch();
    const nav = useNavigate();
    const con = contacts.filter((p) => p.nom === nom);
    return (
        <div className="row">
            {con.length > 0 ? (
        con.map((c, i) => (
            <div key={i} className="col-md-4 mb-3">
            <div className="card shadow-sm border-0 rounded">
            <div className="card-body">
            <h5 className="card-title text-success">{c.nom}</h5>
            <p className="card-text"><strong>Nom:</strong> {c.nom}</p>
            <p className="card-text"><strong>Téléphone:</strong> {c.telephone}</p>
            <p className="card-text"><strong>Email:</strong> {c.email}</p>
            <button className="btn btn-danger btn-sm me-3"onClick={() => {dis(deletc(c.id));nav('/c/');}}>Supprimer</button>
                    <Link className="btn btn-success btn-sm" to={`/c/m/${c.id}`}>mod</Link>
            </div>
            </div>
            </div>
        )) ) : (
                <div className="text-center mt-4">
                    <p className="text-danger">Aucun contact trouvé pour "{nom}"</p>
                </div>
            )}
        </div>
    );
}
