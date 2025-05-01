import { useDispatch, useSelector } from "react-redux";
import { delete_user } from "../action";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function User() {
  const users = useSelector((data) => data.users);
  const dis = useDispatch();

  const [start, setStart] = useState(0);
  const perPage = 5;
  const end = start + perPage;

  const paginatedUsers = users.slice(start, end);

  function prev() {
    if (start > 0) setStart(start - perPage);
  }

  function next() {
    if (end < users.length) setStart(start + perPage);
  }

  return (
    <div className="container mt-4">
      <table className="table table-striped table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((u, i) => (
            <tr key={i}>
              <td>{u.nom}</td>
              <td>{u.prenom}</td>
              <td>{u.email}</td>
              <td>{u.telephone}</td>
              <td>
                <Link to={`/u/m/${u.id}`} className="btn btn-success">Modify</Link>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => dis(delete_user(u.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-primary" onClick={prev} disabled={start === 0}>
          Previous
        </button>
        <button className="btn btn-outline-primary" onClick={next} disabled={end >= users.length}>
          Next
        </button>
      </div>
    </div>
  );
}
