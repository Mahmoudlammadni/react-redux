import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modyc } from "../action";
import { useNavigate } from "react-router-dom";

export default function Mody_contact() {
    const { id } = useParams();
    const con = useSelector(data => data.contact.find((p) => p.id === parseInt(id)));
    const dis = useDispatch();
    const [nom, setnom] = useState(con.nom);
    const [telephone, settelephone] = useState(con.telephone);
    const [email, setemail] = useState(con.email);
    const nav = useNavigate();
    function add(e) {
        e.preventDefault();
        const con = { id: id, nom: nom, telephone: telephone, email: email };
        dis(modyc(con));
        nav("/c/");
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h3 className="card-title mb-0">Modifier Contact</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={add}>
                                <div className="mb-3">
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input type="text" className="form-control" id="nom" value={nom} onChange={(e) => setnom(e.target.value)} required/>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="telephone" className="form-label">Téléphone</label>
                                    <input type="text" className="form-control" id="telephone" value={telephone} onChange={(e) => settelephone(e.target.value)} required/>
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setemail(e.target.value)} required />
                                </div>
                                
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button  type="button"  className="btn btn-secondary me-md-2" onClick={() => nav("/c/")}> Annuler</button>
                                    <button type="submit" className="btn btn-primary"> Enregistrer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}