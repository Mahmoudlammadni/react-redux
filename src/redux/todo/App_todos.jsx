import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Todos from "./todos";
import Add_todo from "./add_todo";
import Mod_todo from "./modify";

export default function App_todos() {
  return (
    <BrowserRouter>
      {/* Navbar with Bootstrap styling */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Todo App</Link>
          <div className="d-flex">
            <Link to="/" className="btn btn-primary mx-2">Home</Link>
            <Link to="/a" className="btn btn-success">Add Todo</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/a" element={<Add_todo />} />
        <Route path="/mod/:id" element={<Mod_todo />} />
      </Routes>
    </BrowserRouter>
  );
}
