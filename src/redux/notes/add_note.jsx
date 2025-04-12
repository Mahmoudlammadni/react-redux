import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_note } from "../action";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddNote() {
    const id = useSelector(data => data.notes[data.notes.length - 1]?.id + 1 || 1);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [priority, setPriority] = useState('Low');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function add(e) {
        e.preventDefault();
        if (title && content) {
            dispatch(add_note({ id, title, content, priority }));
            navigate("/n/"); 
        }
    }

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-lg">
                <h2 className="mb-4 text-center text-primary">Ajouter une Note</h2>
                <form onSubmit={add}>
                    <div className="mb-3">
                        <label className="form-label">Titre</label>
                            <input  type="text"  className="form-control"  placeholder="Titre de la note"  onChange={(e) => setTitle(e.target.value)}  value={title}  required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contenu</label>
                        <textarea  className="form-control"  rows="4"  placeholder="Écrivez le contenu de la note" onChange={(e) => setContent(e.target.value)}  value={content} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Priorité</label>
                        <select  className="form-select"  value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="Low">Faible</option>
                            <option value="Medium">Moyenne</option>
                            <option value="High">Haute</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 py-2">Ajouter la note</button>
                </form>
            </div>
        </div>
    );
}
