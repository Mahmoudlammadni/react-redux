import User from "./Users";
import Add_user from "./add_user";
import Update_Users from "./update_user";
import { Link, Routes, Route } from "react-router-dom";

export default function App_User() {
    return (
        <div className="container mt-5">
            <nav className="mb-4 d-flex gap-3">
                <Link to="/u/" className="btn btn-outline-primary px-4 fw-bold"> Home</Link>
                <Link to="/u/a" className="btn btn-outline-success px-4 fw-bold">Add</Link>
            </nav>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/a" element={<Add_user />} />
                <Route path="/m/:id" element={<Update_Users />} />
            </Routes>
        </div>
    );
}
