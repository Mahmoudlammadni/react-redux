import { useSelector } from "react-redux"
import { delp } from "../action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addpa } from "../action";
export default function Products() {
    const prods = useSelector(data=>data.products)
    const dis =useDispatch()
    return(
        <div className="container mt-4">
        <h2 className="text-center text-dark mb-4">Product List</h2>
        <div className="table-responsive">
            <table className="table table-striped table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prix ($)</th>
                        <th>Quantité</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {prods.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td className="fw-bold">{p.nom}</td>
                            <td className="text-success">${p.prix}</td>
                            <td>{p.quantite}</td>
                            <td >
                               
                                <button onClick={()=>dis(delp(p.id))} className="btn btn-sm   btn-outline-danger">delete</button>
                                <Link to={`/p/m/${p.id}`} className="btn btn-sm btn-outline-success">Modify</Link>
                                <button onClick={()=>dis(addpa(p))} className="btn btn-sm btn-outline-primary">Buy</button>
                               
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
    
}