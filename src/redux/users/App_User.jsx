import User from "./Users";
import Add_user from "./add_user";
import Update_user from "./update_user";
import { Link, Routes, Route } from "react-router-dom";

export default function App_User() {
    return (
        <div className="container mt-5">
            <nav className="mb-4">
                <Link to="/u/" className="btn btn-primary">Home</Link>
                <Link to="/u/a" className="btn btn-primary">Add</Link>
            </nav>
                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="/a" element={<Add_user />} />
                    <Route path="/u" element={<Update_user />} />
                </Routes>
          
        </div>
    );
}
