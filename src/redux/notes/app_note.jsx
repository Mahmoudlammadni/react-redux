import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NoteSearch from "./NoteSearch";
import Note from "./notes";
import Add_note from "./add_note";
import UpdateNote from "./update_note";
import Fav_note from "./fav_note";
import HighNotes from "./High_note";
import MediumNote from "./Medium_nots";
export default function App_notes() {
    return (
        <>
            <div className="container mt-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm rounded">
  <div className="container-fluid">
    <Link to="/n/" className="navbar-brand fw-bold text-primary">NotesApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/n/" className="nav-link">All Notes</Link>
        </li>
        <li className="nav-item">
          <Link to="/n/a" className="nav-link">Add Note</Link>
        </li>
        <li className="nav-item">
          <Link to="/n/f" className="nav-link">Favorites</Link>
        </li>
        <li className="nav-item">
          <Link to="/n/h" className="nav-link">High</Link>
        </li>
        <li className="nav-item">
          <Link to="/n/m" className="nav-link">Medium</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



                <Routes>
                    <Route path="/" element={<Note />} />
                    <Route path="/notes/search/:term" element={<NoteSearch />} />
                    <Route path="/a" element={<Add_note />} />
                    <Route path="/u/:id" element={<UpdateNote />} />
                    <Route path="/f" element={<Fav_note />} />
                    <Route path="/h" element={<HighNotes />} />
                    <Route path="/m" element={<MediumNote />} />
                </Routes>
            </div>
        </>
    );
}
