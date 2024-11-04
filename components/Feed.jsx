import Post from "./Post";
import PostForm from "./PostForm";

const Feed = () => {
  return (
    <div className="flex flex-1 flex-col p-2 lg:py-8 lg:px-[150px]">
      <PostForm />
      <Post />
    </div>
  );
};

export default Feed;
