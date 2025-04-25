import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NoteSearch from "./NoteSearch";
import Note from "./notes";
import Add_note from "./add_note";
import UpdateNote from "./update_note";
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
      </ul>
    </div>
  </div>
</nav>



                <Routes>
                    <Route path="/" element={<Note />} />
                    <Route path="/notes/search/:term" element={<NoteSearch />} />
                    <Route path="/a" element={<Add_note />} />
                    <Route path="/u/:id" element={<UpdateNote />} />
                </Routes>
            </div>
        </>
    );
}
