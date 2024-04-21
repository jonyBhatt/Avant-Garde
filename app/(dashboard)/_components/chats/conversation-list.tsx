import SearchBar from "@/components/shared/search-bar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilePenLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddContact from "./contact-search";
import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import ContactList from "./contact-list";

const ConversationList = async () => {
  const { currentUserPrisma } = await getChatUser();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 py-4 pr-2">
        <div className="flex justify-between ">
          <h2 className="font-rubik text-xl font-bold">Chats</h2>
          <Sheet>
            <SheetTrigger asChild className="cursor-pointer">
              <FilePenLine size={25} />
            </SheetTrigger>
            <SheetContent side={"top"} className="p-0 ">
              <SheetHeader className="bg-primary text-left">
                <div className="mt-14 mb-3 ml-4">
                  <SheetTitle className="font-rubik font-bold text-lg text-white sm:text-start">
                    New Contact
                  </SheetTitle>
                </div>
              </SheetHeader>
              <AddContact currentUser={currentUserPrisma} />
            </SheetContent>
          </Sheet>
        </div>
        <SearchBar />
      </div>
      <ContactList contacts={currentUserPrisma} />
    </div>
  );
};
export default ConversationList;
