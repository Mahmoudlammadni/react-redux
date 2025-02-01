import { useSelector } from "react-redux"
export default function Products() {
    const prods = useSelector(data=>data.products)
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
                            <td>
                                <button className="btn btn-sm btn-outline-primary">Buy</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
    
}