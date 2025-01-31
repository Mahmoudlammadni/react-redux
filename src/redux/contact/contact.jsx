import { useSelector } from "react-redux";
import { deletc } from "../action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Mody_contact from "./modify";

export default function Contact() {
    const con = useSelector(data => data.contact);
    const dis = useDispatch()
    return (
        <div className="container mt-4">
            <h2 className="text-center text-primary mb-4">Contacts</h2>
            <div className="row">
                {con.map((c, i) => (
                    <div key={i} className="col-md-4 mb-3">
                        <div className="card shadow-sm border-0 rounded">
                            <div className="card-body">
                                <h5 className="card-title text-success">{c.nom}</h5>
                                <p className="card-text">
                                    <strong>Nom:</strong> {c.nom}
                                </p>
                                <p className="card-text">
                                    <strong>Téléphone:</strong> {c.telephone}
                                </p>
                                <p className="card-text">
                                    <strong>Email:</strong> {c.email}
                                </p>
                                <button className="btn btn-danger btn-sm me-3" onClick={() => dis(deletc(c.id))}>Supprimer</button>
                                <Link className="btn btn-success btn-sm"  to={`/c/m/${c.id}`}>mod</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
