import { useLoaderData } from "react-router";

function Posts() {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Posts:{posts.length}</h1>
    </div>
  );
}

export default Posts;
