"use client";

import {
  ChatBubbleOvalLeftIcon,
  HandThumbUpIcon,
  ShareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Post = ({ doc }) => {
  return (
    <div className="w-full mt-4 rounded-md bg-white shadow-lg">
      <div className="flex relative items-center p-4">
        <Image
          src={doc.profilePic}
          height={500}
          width={500}
          alt="Profile Picture"
          className="rounded-full size-8 hidden lg:block mr-2"
        />
        <div>
          <h3 className="text-lg">{doc.username}</h3>
          <p className="text-sm text-gray-500">
            {new Date(doc.timestamp?.toDate()).toUTCString()}
          </p>
        </div>
      </div>

      <div className="mt-3 mb-3 px-4 py-6">
        <p>{doc.message}</p>
      </div>

      {doc.image !== "" && (
        <div>
          <Image
            src={doc.image}
            width={500}
            height={500}
            className="w-full"
            alt="Post"
          />
        </div>
      )}

      <div className="p-4 border-t-slate-200 flex justify-evenly text-base cursor-pointer text-gray-500">
        <div className="hover:bg-slate-200 hover:rounded-lg flex items-center justify-center flex-1 p-2">
          <HandThumbUpIcon className="size-6 " />
          <p className="ml-2">Like</p>
        </div>
        <div className="hover:bg-slate-200 hover:rounded-lg flex items-center justify-center flex-1 p-2">
          <ChatBubbleOvalLeftIcon className="size-6 " />
          <p className="ml-2">Comment</p>
        </div>
        <div className="hover:bg-slate-200 hover:rounded-lg flex items-center justify-center flex-1 p-2">
          <ShareIcon className="size-6 " />
          <p className="ml-2">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
