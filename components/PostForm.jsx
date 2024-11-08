"use client";

import {
  FaceSmileIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";

import { db } from "@/lib/firebase";
import { collection, query, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "@/hooks/useAuth";

import { useState } from "react";

const PostForm = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setImage("");

    try {
      const posts = query(collection(db, "posts"));

      await addDoc(posts, {
        message,
        timestamp: serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg w-full">
      <div className="flex p-4 justify-center items-center border-b-blue-200 rounded-lg">
        {user && (
          <Image
            src={user.photoURL}
            height={500}
            width={500}
            alt="Profile Picture"
            className="rounded-full size-10 ml-4"
          />
        )}
        <form onSubmit={handleSubmit} className="flex flex-1">
          <input
            id="message"
            name="message"
            type="text"
            value={message}
            placeholder={`What's on your mind, ${user && user.displayName}?`}
            className="flex-1 ml-4 outline-0 border-none px-2 py-3 rounded-full my-3 bg-slate-200"
            onChange={(e) => setMessage(e.target.value)}
          />

          <input
            id="image"
            name="image"
            type="text"
            value={image}
            placeholder="Image URL (Optional)"
            className="flex-1 ml-4 outline-0 border-none px-2 py-3 rounded-full my-3 bg-slate-200"
            onChange={(e) => setImage(e.target.value)}
          />

          <button type="submit" className="hidden">
            Hidden Submit
          </button>
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
