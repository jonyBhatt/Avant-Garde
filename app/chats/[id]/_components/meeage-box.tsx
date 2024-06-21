"use client";
import { FullMessageType } from "@/utils/types";
import { User } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import { useMemo } from "react";

interface MessageBoxProps {
  messages: FullMessageType;
  isLast: boolean;
  currentUser: User;
}
export const MessageBox = ({
  messages,
  isLast,
  currentUser,
}: MessageBoxProps) => {
  const ownChat = messages.senderId === currentUser?.id;
  // console.log(currentUser?.id);

  // console.log(ownChat);

  const seenList = (messages.seen || [])
    .filter((user) => user.id !== messages.sender.id)
    .join(", ");
  const seenInfo = useMemo(() => {
    seenList.length > 0 ? "/svg/seen.svg" : "/svg/Sent.svg";
  }, [seenList]);

  return (
    <div
      className={clsx("flex mb-[2px]", ownChat && "justify-end items-start")}
    >
      {!ownChat && (
        <div className="ml-16 flex items-start">
          <img
            src="/svg/MessageBubbleTriangleWhite.svg"
            alt="message"
            className="transform scale-x-[-1] items-start"
          />
        </div>
      )}
      <div className={clsx("flex flex-col", ownChat && "items-end")}>
        <div
          className={clsx(
            "text-sm w-fit overflow-hidden",
            ownChat ? "bg-[#d1f4cc] text-black" : "bg-gray-100 text-black",
            messages.image
              ? "rounded-[3px]"
              : "rounded-[7px] py-2 px-3 shadow-lg shadow-gray-300 "
          )}
        >
          {messages.image ? (
            <Image
              src={messages.image}
              alt="message"
              // className="w-fit h-fit"
              height="288"
              width="288"
            />
          ) : (
            <div className="flex flex-col relative max-w-[600px]">
              <p className="mb-2 break-words mr-20">{messages.body}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    // <div>Hello</div>
  );
};
