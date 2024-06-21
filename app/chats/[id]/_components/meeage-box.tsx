/* eslint-disable @next/next/no-img-element */
"use client";
import { FullMessageType } from "@/utils/types";
import { User } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import { useMemo } from "react";
import { format } from "date-fns";

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
  console.log(messages.seen);

  const seenList = (messages.seen || []).filter(
    (user) => messages.seen && user.id !== messages.sender.id
  );

  // console.log(seenList.length);

  let seenInfo: string;
  if (seenList.length > 0) {
    seenInfo = "/svg/seen.svg";
  } else {
    seenInfo = "/svg/sent.svg";
  }

  return (
    <div
      className={clsx(
        "flex mb-[2px]",
        ownChat && "justify-end items-start relative"
      )}
    >
      <div className={clsx("flex flex-col", ownChat && "items-end")}>
        <div
          className={clsx(
            "text-sm w-fit overflow-hidden",
            ownChat ? "bg-muted " : "bg-gray-100 text-black",
            messages.image
              ? "rounded-[3px]"
              : "rounded-[7px] py-2 px-3 shadow-sm shadow-purple-500 "
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
              <p className="mb-2 break-words mr-20 font-inter">
                {messages.body}
              </p>
              <div className="flex justify-end items-center absolute bottom-0 right-0">
                <p className="text-[11px h-[15px] text-gray-500 font-rubik">
                  {format(new Date(messages.createdAt), "p")}
                </p>
                {ownChat && (
                  <img
                    src={seenInfo}
                    alt="seen"
                    className="mr-[2px] ml-[2px] w-[16px] h-[11px]"
                  />
                )}
                {isLast && ownChat && seenList.length > 0 && (
                  <div className="text-xs font-light text-gray-500">
                    {`Seen by ${seenList}`}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    // <div>Hello</div>
  );
};
