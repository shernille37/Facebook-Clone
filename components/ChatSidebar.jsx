import Conversation from "./Conversation";

import { PlusIcon } from "@heroicons/react/24/outline";

const ChatSidebar = () => {
  return (
    <div className="flex flex-col flex-[0.20] p-2 border-r-2">
      <div className="flex justify-between items-center p-2">
        <h3 className="font-bold text-lg">Chats</h3>
        <div className="hover:bg-slate-200 p-3 rounded-full cursor-pointer">
          <PlusIcon className="size-6 " />
        </div>
      </div>
      <Conversation />
    </div>
  );
};

export default ChatSidebar;
