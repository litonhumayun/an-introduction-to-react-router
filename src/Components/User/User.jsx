import { Link } from "react-router";
import Users from "../Home/Users/Users";
const User = ({ user }) => {
  const { id, name, username, email, phone } = user;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border gap-2">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{username}</div>
        </h2>

        <div className="card-actions justify-end">
          <div className="badge badge-outline float-left">Email: {email}</div>
          <div className="badge badge-outline">Phone: {phone}</div>
        </div>
        <Link to={`/user/${id}`} className="btn btn-primary">
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default User;
