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
        return <p className="text-danger text-center mt-5">Note not found</p>;
    }

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-lg">
                <h2 className="mb-4 text-center text-warning">Modifier la Note</h2>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label className="form-label">Titre</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contenu</label>
                        <textarea className="form-control" rows="4" value={content} onChange={(e) => setContent(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Priorité</label>
                        <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="Low">Faible</option>
                            <option value="Medium">Moyenne</option>
                            <option value="High">Haute</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-warning w-100 py-2">Modifier la note</button>
                </form>
            </div>
        </div>
    );
}
