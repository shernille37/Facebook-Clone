import MessageForm from "./MessageForm";
import HeaderChat from "./HeaderChat";
import Message from "./Message";

const ChatMessage = () => {
  const messages = [
    { sender: true, message: "Hello" },
    { sender: false, message: "Hi" },
    { sender: true, message: "How are you?" },
  ];

  return (
    <div className="flex flex-col flex-1 p-2">
      <HeaderChat />

      <div className="flex flex-col flex-1 justify-end gap-3 p-2 overflow-scroll">
        {messages.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            message={message.message}
          />
        ))}
      </div>
      <MessageForm />
    </div>
  );
};

export default ChatMessage;
