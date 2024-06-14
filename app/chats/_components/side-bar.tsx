import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BsThreeDotsVertical } from "react-icons/bs";

import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import { ContactDelete } from "./contact-delete-dialoge";

export default async function Sidebar() {
  const { currentUserPrisma } = await getChatUser();
  console.log(currentUserPrisma.following);
  if (!currentUserPrisma.id) return null;
  return (
    <aside className="w-full overflow-y-auto p-4 border-2 shadow-md shadow-muted rounded-xl h-dvh ">
      {currentUserPrisma.following.map((user) => (
        <div key={user.id} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={user.photo!} />
              <AvatarFallback>{user.firstName.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <h3 className="font-rubik font-semibold text-base">
              {user.firstName}
            </h3>
          </div>
          <Dialog>
            <DialogTrigger>
              <BsThreeDotsVertical className="w-5 h-5" />
            </DialogTrigger>
            <DialogContent>
              <ContactDelete id={user.id} />
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </aside>
  );
}
