import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { AddContactsSection } from "./add-contacts/add-contact-sction";
import Image from "next/image";
import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import Link from "next/link";
import { cn } from "@/lib/utils";
export default async function ChatHeader() {
  const user = await getChatUser();
  if (!user) return null;
  return (
    <div className="p-4 bg-muted w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={user.currentUserPrisma.photo!} />
            <AvatarFallback>
              {user.currentUserPrisma.firstName.slice(0, 1)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <h3 className="font-rubik font-bold text-base">
              {user.currentUserPrisma.firstName}
            </h3>
            <span className="font-inter font-light text-sm text-muted-foreground">
              Chats Room
            </span>
          </div>
        </div>
        {/** Mobile */}
        <div className="md:hidden sm:block">
          <Sheet>
            <SheetTrigger>
              <BiDotsVerticalRounded className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent className="p-0">
              <SheetHeader className="h-[150px] border-b">
                <div className="pt-20 ml-3 flex items-center gap-6">
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    className="rounded-[8px]"
                  >
                    <h2 className="uppercase tracking-wider">Dashboard</h2>
                  </Button>
                  <Button
                    size={"lg"}
                    variant={"ghost"}
                    className="rounded-[8px]"
                  >
                    <h2 className="uppercase tracking-wider text-primary-foreground">
                      Add Contacts
                    </h2>
                  </Button>
                </div>
              </SheetHeader>
              <div className="mt-8 px-4">
                <h2>Contact List</h2>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <AddContactsSection />
          {user.currentUserPrisma.role === "STUDENT" ? (
            <>
              <Link
                href={"/user-dashboard"}
                className={buttonVariants({
                  size: "lg",
                })}
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                href={"/mentor-dashboard"}
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-[20px]",
                })}
              >
                Dashboard
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
