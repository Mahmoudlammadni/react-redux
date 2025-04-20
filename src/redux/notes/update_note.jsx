import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { modify_note } from "../action";

export default function UpdateNote() {
    const { id } = useParams();
    const note = useSelector(state => state.notes.find(n => n.id === parseInt(id)));
    const [title, setTitle] = useState(note?.title || '');
    const [content, setContent] = useState(note?.content || '');
    const [priority, setPriority] = useState(note?.priority || 'Low');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(modify_note({ id: parseInt(id), title, content, priority }));
        navigate("/n/");
    };

    if (!note) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <p className="text-danger fw-bold">Note introuvable</p>
            </div>
        );
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow-lg border-0 w-100" style={{ maxWidth: "600px" }}>
                <div className="card-body p-4">
                    <h3 className="card-title text-center text-primary mb-4">Modifier la Note</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Titre</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Contenu</label>
                            <textarea 
                                className="form-control" 
                                rows="4" 
                                value={content} 
                                onChange={(e) => setContent(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-semibold">Priorité</label>
                            <select 
                                className="form-select" 
                                value={priority} 
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value="Low">Faible</option>
                                <option value="Medium">Moyenne</option>
                                <option value="High">Haute</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Enregistrer les modifications
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
