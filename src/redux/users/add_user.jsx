import { useSelector } from "react-redux";
import { add_user } from "../action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Add_user() {
  const id = useSelector((data) =>
    data.users.length ? data.users[data.users.length - 1].id + 1 : 1
  );
  const dis = useDispatch();
  const nav = useNavigate();
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [email, setemail] = useState("");
  const [telephone, settelephone] = useState("");

  function add(e) {
    e.preventDefault();
    const ob = { id: parseInt(id), nom, prenom, email, telephone };
    dis(add_user(ob));
    nav("/u/");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form  onSubmit={add}  className="p-4 rounded-4 shadow border border-light bg-white">
            <h3 className="text-center mb-4 text-primary fw-bold">  Ajouter un utilisateur</h3>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="nom" placeholder="Nom" value={nom} onChange={(e) => setnom(e.target.value)} required/>
              <label htmlFor="nom">Nom</label>
            </div>

            <div className="form-floating mb-3">
              <input  type="text"  className="form-control"  id="prenom"  placeholder="Prénom"  value={prenom}  onChange={(e) => setprenom(e.target.value)}  required/>
              <label htmlFor="prenom">Prénom</label>
            </div>

            <div className="form-floating mb-3">
              <input  type="email"  className="form-control"  id="email"  placeholder="Email"  value={email}  onChange={(e) => setemail(e.target.value)}  required/>
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-4">
              <input type="tel" className="form-control" id="telephone" placeholder="Téléphone" value={telephone} onChange={(e) => settelephone(e.target.value)} required />
              <label htmlFor="telephone">Téléphone</label>
            </div>
        <button type="submit"  className="btn btn-primary w-100 py-2 fw-semibold">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
}
