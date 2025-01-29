import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "./action";

export default function Add_todo() {
    const id = useSelector(data => data.taches[data.taches.length - 1].id + 1);
    const [titre, settitre] = useState("");
    const [etate, setetate] = useState("");
    const dis = useDispatch();
    const nav = useNavigate();

    function addtodo(e) {
        e.preventDefault();
        const newd = new Date().toISOString().split("T")[0]; 
        dis(add({ id: parseInt(id), titre: titre, date: newd, etate: etate }));
        nav("/");
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Ajouter une nouvelle tâche</h2>
            <form onSubmit={addtodo} className="form-group">
                <div className="mb-3">
                    <label htmlFor="titre" className="form-label">Titre</label>
                    <input type="text"placeholder="Titre de la tâche"onChange={(e) => settitre(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="etate" className="form-label">État</label>
                    <input type="text"placeholder="État de la tâche"onChange={(e) => setetate(e.target.value)}className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
}
