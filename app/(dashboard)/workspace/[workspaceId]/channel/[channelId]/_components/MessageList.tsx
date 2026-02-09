import MessageItem from "./message/MessageItem";

const messages = [
  {
    id: 1,
    message: "Hello how are you my friend  ",
    date: new Date(),
    avatar: "https://avatars.githubusercontent.com/u/111274475?v=4",
    userName: "Arijit Karmakar",
  },
];

function MessageList() {
  return (
    <div className="relative h-full">
      <div className="h-full overflow-y-auto px-4">
        {messages.map((message) => (
          <MessageItem key={message.id} {...message} />
        ))}
      </div>
    </div>
  );
}

export default MessageList;
