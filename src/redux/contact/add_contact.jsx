import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addc } from "../action";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddContact() {
    const id = useSelector(data => data.contact[data.contact.length - 1].id + 1 );
    const [nom, setNom] = useState('');
    const [tele, setTele] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function add(e) {
        e.preventDefault();
        dispatch(addc({ id: parseInt(id), nom, telephone: tele, email }));
        navigate("/c/");
    }

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <h2 className="mb-4 text-center">Ajouter un contact</h2>
                <form onSubmit={add}>
                    <div className="mb-3">
                        <label className="form-label">Nom</label>
                        <input type="text" className="form-control" placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Téléphone</label>
                        <input type="text" className="form-control" placeholder="Téléphone" onChange={(e) => setTele(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Ajouter</button>
                </form>
            </div>
        </div>
    );
}
