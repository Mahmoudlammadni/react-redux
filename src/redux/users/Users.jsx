import { useSelector } from "react-redux";

export default function User() {
    const user = useSelector((data) => data.users);
    console.log(user);

    return (
        <div className="container mt-4">
            <table className="table table-striped table-hover table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>prenom</th>
                        <th>Email</th>
                        <th>telephone</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((u, i) => (
                        <tr key={i}>
                            <td>{u.nom}</td>
                            <td>{u.prenom}</td>
                            <td>{u.email}</td>
                            <td>{u.telephone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
