"use client";
import { Button } from "@/components/ui/button";
import { Contacts } from "@/lib/actions/chat/get-chat-current-user";
import { cn, handleError } from "@/lib/utils";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

interface ContactListProps {
  contacts: User & {
    following: User[];
  };
}

const ContactList = ({ contacts }: ContactListProps) => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // console.log(chatOwner);
  // console.log(contacts.following);
  //@ts-ignore

  const handleChats = useCallback(
    async (id: string) => {
      const requestId = {
        userId: id,
      };
      try {
        const response = await fetch("/api/chat/conversations", {
          method: "POST",
          body: JSON.stringify(requestId),
        });

        if (!response.ok) {
          throw new Error("Failed to create conversation");
        }

        // Parse the response JSON to get the conversation ID
        const { id } = await response.json();
        // console.log(id);

        router.push(`/chats/conversation/${id}`);
      } catch (error) {
        console.error("Error creating conversation:", error);
      }
    },
    [router]
  );

  const Contact = async (value: string, id: string) => {
    console.log(value, id);
    try {
      await Contacts(value, id);
      if (value === "delete") {
        toast.success("Delete Contact");
      }
    } catch (error) {
      handleError(error);
      toast.error("Something Wrong!");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-start">
      {contacts.following &&
        contacts.following?.length > 0 &&
        contacts.following?.map((chatsPublic, index) => (
          <div
            key={chatsPublic.id}
            className="flex justify-between items-center w-full px-4  "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleChats(chatsPublic.id)}
          >
            <div className="flex justify-between items-center w-full cursor-pointer  px-4 py-6  rounded-bl-xl ">
              <div className="flex gap-2 items-center">
                <Image
                  src={
                    chatsPublic.photo
                      ? `${chatsPublic.photo}`
                      : "/images/user.jpg"
                  }
                  alt="user profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h2 className="font-inter font-bold">
                    {chatsPublic.firstName}
                  </h2>
                </div>
              </div>
              <span className="text-muted-foreground font-inter text-sm">
                {chatsPublic.createAt.toString().slice(0, 11)}
              </span>
            </div>
            <Button
              variant={"destructive"}
              onClick={() => Contact("delete", chatsPublic.id)}
              size={"lg"}
              className={cn(
                `rounded-xl ${
                  hoveredIndex === index
                    ? " opacity-100"
                    : " opacity-0 pointer-events-none"
                } transition-all duration-300`
              )}
            >
              Delete Contact
            </Button>
          </div>
        ))}
    </div>
  );
};
export default ContactList;
