import { useLoaderData } from "react-router"; // use `react-router-dom` not `react-router`

function PostDetails() {
  const singlePost = useLoaderData();

  // Optional: add a check in case data is missing or undefined
  if (!singlePost) {
    return <div>Loading post...</div>;
  }

  const { id, title, body } = singlePost;

  return (
    <div className="p-4 border rounded shadow-md max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-2">Post No: {id}</h1>
      <h2 className="text-lg font-semibold mb-1">Title: {title}</h2>
      <p className="text-white-200">{body}</p>
    </div>
  );
}

export default PostDetails;
