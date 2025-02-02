import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import { modp } from "../action"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
export default function Pro_mody() {
    const {id}=useParams()
    const pro = useSelector(data=>data.products.find((i)=>i.id===parseInt(id)))
    const [nom ,setnom]=useState(pro.nom)
    const [prix ,setprix]=useState(pro.prix)
    const [qua ,setqua]=useState(pro.quantite)
    const dis =useDispatch()
    const nav =useNavigate()
    function mod(e) {
        e.preventDefault()
         const ob = {id :parseInt(id) ,nom : nom ,prix:prix,quantite:qua }
         dis(modp(ob))
         nav('/p/')
         

    }
    return(
        <form onSubmit={mod} className="p-4 bg-light rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold">Nom du produit</label>
          <input type="text" className="form-control" value={nom}  onChange={(e) => setnom(e.target.value)} placeholder="Entrez le nom du produit"/>
        </div>
      
        <div className="mb-3">
          <label className="form-label fw-bold">Prix</label>
          <input type="text" className="form-control" value={prix}  onChange={(e) => setprix(e.target.value)} placeholder="Entrez le prix"/>
        </div>
      
        <div className="mb-3">
          <label className="form-label fw-bold">Quantité</label>
          <input type="text" className="form-control" value={qua}  onChange={(e) => setqua(e.target.value)} placeholder="Entrez la quantité"/>
        </div>
      
        <button className="btn btn-primary w-100 fw-bold">Modifier</button>
      </form>
      
    )
}