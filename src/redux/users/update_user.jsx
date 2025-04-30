import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { update_user } from "../action";

export default function Update_user() {
  const { id } = useParams(); 
  const user = useSelector((state) =>
    state.users.find((user) => user.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    if (user) {
      setNom(user.nom);
      setPrenom(user.prenom);
      setEmail(user.email);
      setTelephone(user.telephone);
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { id: parseInt(id), nom, prenom, email, telephone };
    dispatch(update_user(updatedUser));
    navigate("/u/");
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleUpdate} className="p-4 rounded-4 shadow border border-light bg-white">
            <h3 className="text-center mb-4 text-primary fw-bold">Modifier un utilisateur</h3>

            <div className="form-floating mb-3">
              <input  type="text"  className="form-control"  id="nom"  placeholder="Nom"  value={nom}  onChange={(e) => setNom(e.target.value)}  required
              />
              <label htmlFor="nom">Nom</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="prenom" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required
              />
              <label htmlFor="prenom">Prénom</label>
            </div>

            <div className="form-floating mb-3">
              <input  type="email"  className="form-control"  id="email"  placeholder="Email"  value={email}  onChange={(e) => setEmail(e.target.value)}  required/>
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-4">
              <input  type="tel"  className="form-control"  id="telephone"  placeholder="Téléphone"  value={telephone}  onChange={(e) => setTelephone(e.target.value)}  required/>
              <label htmlFor="telephone">Téléphone</label>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
              Mettre à jour
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
