import {
  getConversationById,
  getMessages,
} from "@/lib/actions/chat/conversation";
import { Conversation } from "./_components/conversation";
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

  return (
    <div className="w-full h-full">
      <Conversation
        initialMessage={fixedMessages}
        conversationId={conversations.id}
        currentUser={currentUserPrisma}
      />
      <Separator className="my-8" />
      {conversations.ownerId === currentUserPrisma.id && (
        <SendMessageForm conversationId={conversations.id} />
      )}
    </div>
  );
}
