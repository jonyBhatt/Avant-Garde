//@ts-ignore

import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import { ChatLink } from "./ChatLink";
import { getConversation } from "@/lib/actions/chat/conversation";
import { FullConversationType } from "@/utils/types";

export default async function Sidebar() {
  const { currentUserPrisma } = await getChatUser();
  const conversation = await getConversation();
  // Check if conversation is of type FullConversationType[]

  if (!currentUserPrisma.id) return null;
  if (!conversation) return null;
  // console.log(conversation);

  return (
    <aside className="w-full overflow-y-auto  border-2 shadow-md shadow-muted rounded-xl h-dvh flex flex-col gap-8 ">
      <h2 className="tracking-wide mx-4 mt-2 text-lg font-semibold font-inter">
        Contacts
      </h2>
      {currentUserPrisma.following.length === 0 &&
        currentUserPrisma.followedBy.length === 0 && (
          <div className="flex items-center justify-center ">
            <h3 className="font-rubik font-semibold text-base">
              You don&apos;t have any user to chat
            </h3>
          </div>
        )}
      {currentUserPrisma.following.map((user) => (
        <ChatLink key={user.id} user={user} />
      ))}
      {currentUserPrisma.followedBy.map((user) => (
        <ChatLink key={user.id} user={user} />
      ))}
    </aside>
  );
}
