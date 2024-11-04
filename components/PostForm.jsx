import {
  FaceSmileIcon,
  PhotoIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

const PostForm = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg w-full">
      <div className="flex p-4 justify-center items-center border-b-blue-200 rounded-lg">
        <UserCircleIcon className="size-8" />
        <form className="flex flex-1">
          <input
            id="message"
            name="message"
            type="text"
            placeholder="What's on your mind, Shernille Licud?"
            className="flex-1 ml-4 outline-0 border-none px-2 py-3 rounded-full my-3 bg-slate-200"
          />

          <input
            id="image"
            name="image"
            type="text"
            placeholder="Image URL (Optional)"
            className="flex-1 ml-4 outline-0 border-none px-2 py-3 rounded-full my-3 bg-slate-200"
          />

          <button className="hidden">Hidden Submit</button>
        </form>
      </div>

      <div className="flex justify-evenly">
        <div className="p-3 flex items-center m-1 hover:bg-slate-200 hover:rounded-lg cursor-pointer">
          <VideoCameraIcon className="size-6 " />
          <h3 className="font-semibold ml-2">Live Video</h3>
        </div>
        <div className="p-3 flex items-center m-1 hover:bg-slate-200 hover:rounded-lg cursor-pointer">
          <PhotoIcon className="size-6 " />
          <h3 className="font-semibold ml-2">Photo/Video</h3>
        </div>
        <div className="p-3 flex items-center m-1 hover:bg-slate-200 hover:rounded-lg cursor-pointer">
          <FaceSmileIcon className="size-6 " />
          <h3 className="font-semibold ml-2">Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
