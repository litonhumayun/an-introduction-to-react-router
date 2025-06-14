import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { username } = user;
  return (
    <div>
      <h1>User Details Page: {username}</h1>
    </div>
  );
};

export default UserDetails;
