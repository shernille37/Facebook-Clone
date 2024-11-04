import Post from "./Post";
import PostForm from "./PostForm";

const Feed = () => {
  return (
    <div className="flex flex-1 flex-col py-8 px-[150px]">
      <PostForm />
      <Post />
    </div>
  );
};

export default Feed;
