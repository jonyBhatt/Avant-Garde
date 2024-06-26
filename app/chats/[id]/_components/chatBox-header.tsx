import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Conversation, User } from "@prisma/client";
import React, { useMemo } from "react";

interface ChatBoxHeaderProps {
  conversation: Conversation & {
    users: User[];
  };
  currentUserPrisma: User;
  isInCall: boolean;
  setIsInCall: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ChatBoxHeader = ({
  conversation,
  currentUserPrisma,
  isInCall,
  setIsInCall,
}: ChatBoxHeaderProps) => {
  // console.log(conversation);
  const chatOwner = conversation.ownerId === currentUserPrisma.id;
  const otherUser = useMemo(() => {
    const user = conversation.users.filter(
      (user) => user.id !== conversation.ownerId
    );
    return user[0];
  }, [conversation.users, conversation.ownerId]);
  // console.log(otherUser[0]);
  const imageUrl = chatOwner ? otherUser.photo : currentUserPrisma.photo;
  const userName = chatOwner
    ? otherUser.firstName.slice(0, 1).toUpperCase()
    : currentUserPrisma.firstName.slice(0, 1).toUpperCase();

  const fullName = chatOwner
    ? otherUser.firstName
    : currentUserPrisma.firstName;

  return (
    <div className="w-full flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={imageUrl!} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
        <h2 className="font-rubik text-lg tracking-tight font-bold">
          {fullName}
        </h2>
      </div>
      <div className="flex items-center gap-4">TODO: Call</div>
    </div>
  );
};
