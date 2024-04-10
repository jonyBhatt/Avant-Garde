import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import { getConversation } from "@/lib/actions/chat/get-conversation";
import Image from "next/image";
import Link from "next/link";
import ConversationList from "./conversation-list";

const ChatSideBar = async () => {
  const { currentUserPrisma } = await getChatUser();
  const conversation = await getConversation();
  // console.log(conversation, currentUserPrisma);

  return (
    <aside className="w-full overflow-y-auto ">
      <ConversationList />
    </aside>
  );
};
export default ChatSideBar;
