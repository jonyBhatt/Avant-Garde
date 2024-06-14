import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import AddContact from "./add-contact";
export const AddContactsSection = async () => {
  const { currentUserPrisma } = await getChatUser();

  return <div>
      <Sheet>
            <SheetTrigger asChild className="cursor-pointer">
              <Button className="bg-transparent hover:bg-transparent">
                Add Contacts
              </Button>
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
              Add 
            </SheetContent>
          </Sheet>
  </div>;
};
