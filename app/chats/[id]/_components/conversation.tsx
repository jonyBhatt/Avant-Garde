"use client";
import { FullConversationType, FullMessageType } from "@/utils/types";
import { useEffect, useState } from "react";
import { MessageBox } from "./meeage-box";

interface ConversationProps {
  initialMessage: FullMessageType[];
  conversationId: string;
}
export const Conversation = ({
  initialMessage,
  conversationId,
}: ConversationProps) => {
  const [messages, setMessages] = useState(initialMessage);
  console.log(messages);

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
    <div>
      {messages.map((message,i) => (
        <div key={message.id}>
            <MessageBox messages={message} isLast={i === messages.length-1}  />
        </div>
      ))}
    </div>
  );
};
