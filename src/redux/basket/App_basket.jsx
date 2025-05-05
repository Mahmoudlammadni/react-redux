import { Route, Routes, Link } from 'react-router-dom';
import Basket from './Basket';
import AddBasket from './add_basket';
import EditBasket from './update_basket';
export default function App_basket(){
return(


    <div className="container mt-4">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
              <div className="navbar-nav">
                <Link to="/b/" className="nav-link">Basket</Link>
                <Link to="/b/a" className="nav-link">AddBasket</Link>
            </div>
          </nav>
    
          <Routes>
            <Route path="/" element={<Basket />} />
            <Route path="/a" element={<AddBasket />} />
            <Route path="/e/:id" element={<EditBasket />} /> 
            
          </Routes>
        </div>
        )
}