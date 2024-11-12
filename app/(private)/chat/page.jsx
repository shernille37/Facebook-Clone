import ChatSidebar from "@/components/ChatSidebar";

const ChatPage = () => {
  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <div className="flex flex-1 ">Conversations</div>
    </div>
  );
};

export default ChatPage;
