import User from "./Users";
import { Link, Routes, Route } from "react-router-dom";

export default function App_User() {
    return (
        <div className="container mt-5">
            <nav className="mb-4">
                <Link to="/u/" className="btn btn-primary">Home</Link>
            </nav>
                <Routes>
                    <Route path="/" element={<User />} />
                </Routes>
          
        </div>
    );
}
