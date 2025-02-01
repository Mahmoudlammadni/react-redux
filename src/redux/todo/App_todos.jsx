import { Route, Routes, Link } from "react-router-dom";
import Todos from "./todos";
import Add_todo from "./add_todo";

import Mod_todo from "./modify";
import Encours from "./encours";
import Complete from "./complete";
export default function App_todos() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link to="/t" className="navbar-brand">Todo App</Link>
          <div className="d-flex">
            <Link to="" className="btn btn-primary mx-2">Home</Link>
            <Link to="/ato" className="btn btn-secondary mx-2">Add Todo</Link>
            <Link to="/enc" className="btn btn-warning mx-2">Encours</Link>
            <Link to="/cm" className="btn btn-success mx-2">Complete</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/ato" element={<Add_todo />} />
        <Route path="/mod/:id" element={<Mod_todo />} />
        <Route path="/enc" element={<Encours />} />
        <Route path="/cm" element={<Complete />} />
      </Routes>
    </>
  );
}
