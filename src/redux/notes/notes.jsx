import { useSelector } from "react-redux";

export default function Note() {
    const notes = useSelector(data => data.notes);

    return (
        <div className="container mt-4">
            <div className="row">
                {notes.map((n, i) => (
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
                ))}
            </div>
        </div>
    );
}
