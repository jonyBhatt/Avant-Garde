"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { User } from "@prisma/client";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ContactDelete } from "./contact-delete-dialoge";
import { usePathname } from "next/navigation";

interface ChatLinkProps {
  key: string;
  user: User;
}
export const ChatLink = ({ user }: ChatLinkProps) => {
  const pathname = usePathname();
  return (
    <div
      key={user.id}
      className={`flex items-center justify-between ${
        pathname === `/chats/${user.conversationId}`
          ? " bg-nav-focus py-2 px-2.5 border-r-2 border-orange-400"
          : ""
      }`}
    >
      <Link
        href={`/chats/${user.conversationId}`}
        className={`flex items-center w-full gap-2 `}
      >
        <Avatar>
          <AvatarImage src={user.photo!} />
          <AvatarFallback>{user.firstName.slice(0, 1)}</AvatarFallback>
        </Avatar>
        <h3 className="font-rubik font-semibold text-base">{user.firstName}</h3>
      </Link>
      <Dialog>
        <DialogTrigger>
          <BsThreeDotsVertical className="w-5 h-5" />
        </DialogTrigger>
        <DialogContent>
          <ContactDelete id={user.id} convoId={user.conversationId} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
