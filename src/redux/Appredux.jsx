import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import App_todos from "./todo/App_todos";
import App_contact from "./contact/app_contact";
export default function App_redux() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand text-warning fw-bold">My Projects</Link>
          <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
             
              <li className="nav-item">
                <Link to="/t" className="nav-link text-light">Todos</Link>
              </li>
              <li className="nav-item">
                <Link to="/c" className="nav-link text-light">Contact</Link>
              </li>
           
             
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          
          <Route path="/t/*" element={<App_todos />} />
          <Route path="/c/*" element={<App_contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
