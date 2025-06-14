import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, username, email, website, phone, address } = user;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Name: {name}</h1>
          <h1 className="text-2xl font-bold">Username: {username}</h1>
          <p className="py-2">
            Address:{" "}
            <p>
              {address.street}, <span>{address.suite}</span>
            </p>
            <p>
              {address.city}, <span>{address.zipcode}</span>
            </p>
            <p>Latitude: {address.geo.lat}</p>
            <p>Langitude: {address.geo.lng}</p>
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email:{email}</label>
              <label className="label">Website: {website}</label>
              <label className="label">Phone: {phone}</label>

              <button className="btn btn-neutral mt-4">Contact Me</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
