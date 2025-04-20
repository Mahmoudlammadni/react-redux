import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Note() {
    const notes = useSelector(data => data.notes);
    const [searchTerm, setSearchTerm] = useState('');
        const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <div className="d-flex align-items-center mb-4">
                <input 
                    type="text" 
                    className="form-control w-auto me-2" 
                    placeholder="Search notes..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>

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
                                    <Link to={`/n/u/${n.id}`} className="btn btn-sm btn-outline-primary mt-2">Modifier</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center mt-4">
                        <p className="text-danger">
                            {searchTerm ? `No notes found for "${searchTerm}"` : "No notes available"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}