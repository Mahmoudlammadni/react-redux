import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Note from "./notes";

export default function App_notes() {
    return (
        <>
            <div className="container mt-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <div className="container-fluid">
                        <Link to={"/n/"} className="navbar-brand">Notes</Link>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Note />} />
                </Routes>
            </div>
        </>
    );
}
