import { useSelector } from "react-redux";
import { add_user } from "../action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Add_user(){
const id = useSelector((data) => (data.users.length ? data.users[data.users.length - 1].id + 1 : 1));
const dis = useDispatch();
const nav = useNavigate();
const [nom,setnom]=useState("")
const [prenom,setprenom]=useState("")
const [email,setemail]=useState("")
const [telephone,settelephone]=useState("")
function add(e){
    e.preventDefault()
     const ob = { id: parseInt(id), nom, prenom, email ,telephone};
        dis(add_user(ob));
        nav('/u/');
}
return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center mb-4 text-uppercase font-weight-bold">Ajouter un User</h2>
          <form onSubmit={add} className="bg-light p-4 rounded-3 shadow-lg">
            <div className="mb-3">
              <label htmlFor="nom" className="form-label font-weight-bold text-secondary">Nom</label>
              <input type="text" className="form-control shadow-sm" id="nom" placeholder="Nom" value={nom}onChange={(e) => setnom(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label htmlFor="prix" className="form-label font-weight-bold text-secondary">prenom</label>
              <input type="text" className="form-control shadow-sm" id="prenom" placeholder="prenom" value={prenom}onChange={(e) => setprenom(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label htmlFor="quantite" className="form-label font-weight-bold text-secondary">email</label>
              <input  type="text"  className="form-control shadow-sm"  id="email"  placeholder="email"  value={email} onChange={(e) => setemail(e.target.value)}  required />
            </div>
            <div className="mb-3">
              <label htmlFor="quantite" className="form-label font-weight-bold text-secondary">telephone</label>
              <input  type="text"  className="form-control shadow-sm"  id="telephone"  placeholder="telephone"  value={telephone} onChange={(e) => settelephone(e.target.value)}  required />
            </div>

            <button type="submit" className="btn btn-success w-100 py-2 mt-3">Ajouter User</button>
          </form>
        </div>
      </div>
    </div>
  ); 
}