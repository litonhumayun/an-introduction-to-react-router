import { useLoaderData } from "react-router";
import User from "../../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-2">
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
