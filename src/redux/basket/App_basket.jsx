import { Route, Routes, Link } from 'react-router-dom';
import Basket from './Basket';
export default function App_basket(){

    <div className="container mt-4">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
              <div className="navbar-nav">
                <Link to="/b/" className="nav-link">Basket</Link>
            </div>
          </nav>
    
          <Routes>
            <Route path="/" element={<Basket />} />
            
          </Routes>
        </div>
}