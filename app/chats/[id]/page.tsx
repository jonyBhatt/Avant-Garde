import {
  getConversationById,
  getMessages,
} from "@/lib/actions/chat/conversation";

export default async function ChatRoom({ params }: { params: { id: string } }) {
  const conversations = await getConversationById(params.id);
  const messages = await getMessages(params.id);
  console.log(conversations);

  if (!conversations) {
    return (
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1>No Conversation Found</h1>
        </div>
      </div>
    );
  }

  return <div>ChatRoom</div>;
}
