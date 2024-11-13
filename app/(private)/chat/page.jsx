import ChatMessage from "@/components/ChatMessage";
import ChatSidebar from "@/components/ChatSidebar";

const ChatPage = () => {
  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <ChatMessage />
    </div>
  );
};

export default ChatPage;
