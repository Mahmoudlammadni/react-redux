import { Route, Routes, Link } from "react-router-dom";
import Todos from "./todos";
import Add_todo from "./add_todo";
import Mod_todo from "./modify";

export default function App_todos() {
  return (
    <>
      {/* Navbar with Bootstrap styling */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link to="/t" className="navbar-brand">Todo App</Link>
          <div className="d-flex">
            <Link to="/t" className="btn btn-primary mx-2">Home</Link>
            <Link to="/t/ato" className="btn btn-success">Add Todo</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/ato" element={<Add_todo />} />
        <Route path="/mod/:id" element={<Mod_todo />} />
      </Routes>
    </>
  );
}
