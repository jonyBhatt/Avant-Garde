"use client";
import { FullConversationType, FullMessageType } from "@/utils/types";
import { Conversation, User } from "@prisma/client";
import { useEffect, useState } from "react";
import { MessageBox } from "./meeage-box";
import { ChatBoxHeader } from "./chatBox-header";
// import { MessageBox } from "./meeage-box";

interface ConversationProps {
  initialMessage: FullMessageType[];
  conversation: Conversation & {
    users: User[];
  };
  currentUser: User;
}
export const ConversationComponent = ({
  initialMessage,
  conversation,
  currentUser,
}: ConversationProps) => {
  const [isInCall, setIsInCall] = useState(false);
  const [messages, setMessages] = useState(initialMessage);

  {
    /** On load page message will be seen  */
  }
  // useEffect(() => {
  //   const seen = async () => {
  //     const res = await fetch(`/api/chat/${conversationId}/seen`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   seen();
  // }, [conversationId]);
  return (
    <div className="flex flex-col gap-16">
      <ChatBoxHeader
        conversation={conversation}
        currentUserPrisma={currentUser}
        isInCall={isInCall}
        setIsInCall={setIsInCall}
      />
      {messages.map((message, i) => (
        <div key={message.id}>
          <MessageBox
            messages={message}
            isLast={i === messages.length - 1}
            currentUser={currentUser}
          />
        </div>
      ))}
    </div>
  );
};
