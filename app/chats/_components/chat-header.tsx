import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiDotsVerticalRounded } from "react-icons/bi";
export default function ChatHeader() {
  return (
    <div className="p-4 bg-muted w-full">
      <div className="flex justify-between items-center">
        <div>User Head</div>
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
                    <h2 className="uppercase tracking-wider text-primary-foreground">Add Contacts</h2>
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
          <span>Add Contacts</span>
          <span>Dashboard Link</span>
        </div>
      </div>
    </div>
  );
}
