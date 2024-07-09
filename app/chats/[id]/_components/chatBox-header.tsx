import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useActiveList from "@/hooks/useActiveUser";
import { Conversation, User } from "@prisma/client";
import { Phone, PhoneOff } from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState } from "react";

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
  const { members } = useActiveList();
  const chatOwner = conversation.ownerId === currentUserPrisma.id;
  console.log(chatOwner);

  const otherUser = useMemo(() => {
    const user = conversation.users.filter(
      (user) => user.id !== conversation.ownerId
    );

    return user[0];
  }, [conversation.users, conversation.ownerId]);
  console.log(otherUser);
  const imageUrl =
    currentUserPrisma.followedByIds[0] === currentUserPrisma.id
      ? otherUser.photo
      : currentUserPrisma.followingIds[0] === otherUser.id
      ? currentUserPrisma.photo
      : null;

  console.log(currentUserPrisma.followedByIds[0]);

  const userName = chatOwner
    ? currentUserPrisma.firstName.slice(0, 1).toUpperCase()
    :  otherUser.firstName.slice(0, 1).toUpperCase()

  const fullName = chatOwner
    ? otherUser.firstName
    : currentUserPrisma.firstName;

  const isActive = members.indexOf(otherUser.id) !== -1;
  const statusCheck = useMemo(
    () => (isActive ? "/svg/online.svg" : "/svg/offline.svg"),
    [isActive]
  );

  return (
    <div className="w-full flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={imageUrl!} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
        <div className="relative">
          <h2 className="font-rubik text-lg tracking-tight font-bold">
            {fullName}
          </h2>
          <img
            src={statusCheck}
            alt="status"
            className="text-sm text-muted-foreground font-inter tracking-wide absolute -top-3 left-5"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsInCall(!isInCall)}
          className={`rounded-xl border border-primary flex items-center justify-center  w-10 h-10 ${
            isInCall ? "bg-destructive-foreground" : ""
          }  `}
        >
          {isInCall ? <PhoneOff className="text-destructive" /> : <Phone />}
        </button>
      </div>
    </div>
  );
};
