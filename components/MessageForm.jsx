"use client";

import { HandThumbUpIcon, PlusIcon } from "@heroicons/react/24/solid";

import { useState } from "react";

const MessageForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center cursor-pointer">
        <PlusIcon className="size-5 text-white bg-blue-500 hover:bg-blue-900 rounded-full" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 ml-3 p-1 rounded-full bg-slate-200"
      >
        <input
          value={message}
          type="text"
          id="message"
          name="message"
          placeholder="Type a message..."
          className="flex-1 p-1 border-none bg-transparent outline-0"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className="hidden">
          Hidden Submit
        </button>
      </form>
      <HandThumbUpIcon className="size-7 ml-3 text-blue-500 hover:text-blue-900 cursor-pointer" />
    </div>
  );
};

export default MessageForm;
