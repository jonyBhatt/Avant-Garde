import ConversationList from "./conversation-list";

const ChatSideBar = async () => {
  return (
    <aside className="w-full overflow-y-auto ">
      <ConversationList />
    </aside>
  );
};
export default ChatSideBar;
