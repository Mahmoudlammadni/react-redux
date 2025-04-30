import { useDispatch, useSelector } from "react-redux";
import { delete_user } from "../action";
import { Link } from "react-router-dom";
export default function User() {
    const user = useSelector((data) => data.users);
    console.log(user);
    const dis =useDispatch()
    return (
        <div className="container mt-4">
            <table className="table table-striped table-hover table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>prenom</th>
                        <th>Email</th>
                        <th>telephone</th>
                        <th  colSpan={2}>action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((u, i) => (
                        <tr key={i}>
                            <td>{u.nom}</td>
                            <td>{u.prenom}</td>
                            <td>{u.email}</td>
                            <td>{u.telephone}</td>
                            <td><Link to={`/u/m/${u.id}`} className="btn btn-success"> Modify</Link></td>
                            <td><button className="btn btn-danger" onClick={()=>{dis(delete_user(u.id))}}>Delete</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
