import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NoteSearch from "./NoteSearch";
import Note from "./notes";
export default function App_notes() {
    return (
        <>
            <div className="container mt-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div className="container-fluid d-flex">
        <Link to={"/n/"} className="navbar-brand me-3">Notes</Link>
        <Link to={"/n/"} className="navbar-brand">Notes</Link>
    </div>
</nav>


                <Routes>
                    <Route path="/" element={<Note />} />
                    <Route path="/notes/search/:term" element={<NoteSearch />} />
                </Routes>
            </div>
        </>
    );
}
