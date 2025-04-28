import { useSelector, useDispatch } from "react-redux";
import { toggle_fav } from "../action";  // Import your toggle_fav action

export default function Fav_note() {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    
    // Filter only the favorite notes
    const favoriteNotes = notes.filter(note => note.fav === true); 

    return (
        <div className="container mt-4">
            <h3>Favorite Notes</h3>
            <div className="row">
                {favoriteNotes.length > 0 ? (
                    favoriteNotes.map((n, i) => (
                        <div key={i} className="col-md-4 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{n.title}</h5>
                                    <p className="card-text">{n.content}</p>
                                    <span className={`badge ${n.priority === 'High' ? 'bg-danger' : n.priority === 'Medium' ? 'bg-warning' : 'bg-success'}`}>
                                        {n.priority}
                                    </span>
                                    
                                    <button className="btn btn-outline-danger btn-sm mt-2" onClick={()=> {n.fav=false}}> Defavoriser
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center mt-4">
                        <p>No favorite notes available.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
