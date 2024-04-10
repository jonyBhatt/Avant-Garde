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

const ConversationList = () => {
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
              <AddContact />
            </SheetContent>
          </Sheet>
        </div>
        <SearchBar />
      </div>
      <div className="flex flex-col gap-4 items-start">
        <Link
          href={"#"}
          className="flex justify-between w-full cursor-pointer transition-all duration-100 hover:bg-muted px-4 py-6  rounded-bl-xl [&:not(:first-child)]:rounded-tl-xl"
        >
          <div className="flex gap-2">
            <Image
              src={"/images/user.jpg"}
              alt="user profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="font-inter font-bold">John Doe</h2>
              <span className="text-muted-foreground font-inter text-sm">
                Message
              </span>
            </div>
          </div>
          <span className="text-muted-foreground font-inter text-sm">time</span>
        </Link>
        <Link
          href={"#"}
          className="flex justify-between w-full cursor-pointer transition-all duration-100 hover:bg-muted px-4 py-6  rounded-bl-xl [&:not(:first-child)]:rounded-tl-xl"
        >
          <div className="flex gap-2">
            <Image
              src={"/images/user.jpg"}
              alt="user profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="font-inter font-bold">John Doe</h2>
              <span className="text-muted-foreground font-inter text-sm">
                Message
              </span>
            </div>
          </div>
          <span className="text-muted-foreground font-inter text-sm">time</span>
        </Link>
      </div>
    </div>
  );
};
export default ConversationList;
