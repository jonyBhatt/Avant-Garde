import {
  getConversationById,
  getMessages,
} from "@/lib/actions/chat/conversation";
import { ConversationComponent } from "./_components/conversation";
import { SendMessageForm } from "./_components/send-message-form";
import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import { Separator } from "@/components/ui/separator";

export default async function ChatRoom({ params }: { params: { id: string } }) {
  const { currentUserPrisma } = await getChatUser();
  const conversations = await getConversationById(params.id);

  if (conversations === null) {
    // Check if conversations is null
    return (
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1>No Conversation Found</h1>
        </div>
      </div>
    );
  }

  if ("error" in conversations) {
    // Check if conversations is an error object
    return (
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1>Error: {conversations.error}</h1>
        </div>
      </div>
    );
  }

  const messages = await getMessages(params.id);
  // console.log(conversations);

  if (!conversations || !conversations.id) {
    // Check if conversations and conversations.id exist
    return (
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1>No Conversation Found</h1>
        </div>
      </div>
    );
  }

  const fixedMessages = Array.isArray(messages) ? messages : [];
  const ownChat = conversations.ownerId === currentUserPrisma.id;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-grow">
        <ConversationComponent
          initialMessage={fixedMessages}
          conversation={conversations}
          currentUser={currentUserPrisma}
          ownChat={ownChat}
        />
      </div>
      <Separator className="my-8" />
      <div className="flex-shrink-0">
        <SendMessageForm conversationId={conversations.id} />
      </div>
    </div>
  );
}
