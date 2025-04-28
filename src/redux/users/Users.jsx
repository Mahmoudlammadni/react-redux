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
                        <th>Surname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((u, i) => (
                        <tr key={i}>
                            <td>{u.nom}</td>
                            <td>{u.prenom}</td>
                            <td>{u.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
