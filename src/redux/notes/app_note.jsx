import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NoteSearch from "./NoteSearch";
import Note from "./notes";
import Add_note from "./add_note";
import UpdateNote from "./update_note";
export default function App_notes() {
    return (
        <>
            <div className="container mt-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div className="container-fluid d-flex">
        <Link to={"/n/"} className="navbar-brand me-3">Notes</Link>
        <Link to={"/n/"} className="navbar-brand">Notes</Link>
        <Link to={"/n/a"} className="navbar-brand">Add note</Link>
        
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
