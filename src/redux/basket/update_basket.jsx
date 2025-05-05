import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { update_basket } from "../action";

export default function EditBasket() {
  const { id } = useParams();
  const basket = useSelector(state => state.basket);
  const product = basket.find(item => item.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    quantite: "",
    type: ""
  });

  useEffect(() => {
    if (product) {
      setFormData({
        nom: product.nom,
        quantite: product.quantite,
        type: product.type
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update_basket({
      id: parseInt(id),
      ...formData,
      quantite: parseInt(formData.quantite)
    }));
    navigate("/b/");
  };

  if (!product) return <p className="text-center mt-5 text-danger">Produit non trouvé</p>;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-4 text-center">Modifier le produit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input 
              type="text" 
              name="nom" 
              value={formData.nom} 
              onChange={handleChange} 
              className="form-control" 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Quantité</label>
            <input 
              type="number" 
              name="quantite" 
              value={formData.quantite} 
              onChange={handleChange} 
              className="form-control" 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <input 
              type="text" 
              name="type" 
              value={formData.type} 
              onChange={handleChange} 
              className="form-control" 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">✅ Mettre à jour</button>
        </form>
      </div>
    </div>
  );
}
