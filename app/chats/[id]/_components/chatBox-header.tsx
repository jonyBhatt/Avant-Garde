import { Conversation, User } from "@prisma/client";
import React from "react";

interface ChatBoxHeaderProps {
  conversation: Conversation & {
    user: User;
  };
  currentUserPrisma: User;
  isInCall: boolean;
  setIsInCall: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ChatBoxHeader = () => {
  return <div>ChatBoxHeader</div>;
};
