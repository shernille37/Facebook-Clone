import MessageForm from "./MessageForm";
import HeaderChat from "./HeaderChat";
import Message from "./Message";

const ChatMessage = () => {
  const messages = [];

  for (let index = 0; index < 100; index++) {
    messages.push({
      sender: index % 2 == 0 ? true : false,
      message: "Hello World",
    });
  }

  return (
    <div className="flex flex-col flex-1 p-2">
      <HeaderChat />

      <div className="flex flex-col flex-1 gap-3 p-2 overflow-scroll overflow-x-hidden">
        {messages.length > 0 &&
          messages.map((message, index) => (
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
