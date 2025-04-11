import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NoteSearch() {
    const { term } = useParams();
    const notes = useSelector((data) => data.notes);
    const nav = useNavigate();
        const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(term.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <div className="row">
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((n, i) => (
                        <div key={i} className="col-md-4 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{n.title}</h5>
                                    <p className="card-text">{n.content}</p>
                                    <span className={`badge ${n.priority === 'High' ? 'bg-danger' : n.priority === 'Medium' ? 'bg-warning' : 'bg-success'}`}>
                                        {n.priority}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center mt-4">
                        <p className="text-danger">No notes found for "{term}"</p>
                        <button className="btn btn-primary"onClick={() => nav('/notes/')}
                        > Back to all notes</button>
                    </div>
                )}
            </div>
        </div>
    );
}