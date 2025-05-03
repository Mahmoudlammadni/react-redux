import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_basket } from "../action";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddBasket() {
    const id = useSelector(data => data.basket[data.basket.length - 1]?.id + 1 || 1);
    const [nom, setNom] = useState('');
    const [quantite, setQuantite] = useState('');
    const [type, setType] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function add(e) {
        e.preventDefault();
        dispatch(add_basket({ id: parseInt(id), nom, quantite: parseInt(quantite), type }));
        navigate("/b/");
    }

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <h2 className="mb-4 text-center">Ajouter un produit au panier</h2>
                <form onSubmit={add}>
                    <div className="mb-3">
                        <label className="form-label">Nom</label>
                        <input type="text" className="form-control" placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantité</label>
                        <input type="number" className="form-control" placeholder="Quantité" onChange={(e) => setQuantite(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Type</label>
                        <input type="text" className="form-control" placeholder="Type (électronique, meuble...)" onChange={(e) => setType(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Ajouter au panier</button>
                </form>
            </div>
        </div>
    );
}
