import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import App_todos from "./todo/App_todos";
import App_contact from "./contact/app_contact";
import App_products from "./products/app_products";
import App_notes from "./notes/app_note";
import App_User from "./users/App_User";
import App_basket from "./basket/App_basket";

export default function App_redux() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand text-warning fw-bold"> My Projects</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) =>   `nav-link ${isActive ? "text-warning" : "text-light"}` }>  Todos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/c" className={({ isActive }) => `nav-link ${isActive ? "text-warning" : "text-light"}`  }>  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/p" className={({ isActive }) =>`nav-link ${isActive ? "text-warning" : "text-light"}`}>Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/n" className={({ isActive }) =>`nav-link ${isActive ? "text-warning" : "text-light"}`}>Notes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/u" className={({ isActive }) =>`nav-link ${isActive ? "text-warning" : "text-light"}`}>users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/b" className={({ isActive }) =>`nav-link ${isActive ? "text-warning" : "text-light"}`}>basket
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/*" element={<App_todos />} />
          <Route path="/c/*" element={<App_contact />} />
          <Route path="/p/*" element={<App_products />} />
          <Route path="/n/*" element={<App_notes />} />
          <Route path="/u/*" element={<App_User/>} />
          <Route path="/b/*" element={<App_basket/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
