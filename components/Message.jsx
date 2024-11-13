const Message = ({ sender, message }) => {
  return (
    <div
      className={`flex ${
        sender ? "justify-end" : "justify-start"
      }  items-center`}
    >
      <div
        className={`${sender ? "bg-blue-500" : "bg-slate-200"} ${
          sender ? "text-white" : "text-black"
        } max-w-[25%]  rounded-lg px-3 py-1`}
      >
        {message}
      </div>
    </div>
  );
};

export default Message;
