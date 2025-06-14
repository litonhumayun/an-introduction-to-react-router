import { useLoaderData } from "react-router";
import Post from "../Post/Post";

function Posts() {
  const posts = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-2">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
