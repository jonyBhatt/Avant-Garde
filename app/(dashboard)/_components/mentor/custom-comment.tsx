import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Reply } from "lucide-react";
import Image from "next/image";
import { CommentReply } from "./reply";

export const CustomComment = () => {
  return (
    <div>
      <DialogContent className="">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pr-4">
            <Input
              type="text"
              placeholder="Comment..."
              className="rounded-[16px]"
            />
            <Button size={"sm"} variant={"outline"} className="rounded-full">
              Comment
            </Button>
          </div>
          <div className="flex flex-col  gap-1">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/user.jpg"
                  alt="user-profile"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <h3 className="font-rubik font-bold">John Doe</h3>
              </div>
              <div className="pl-11">
                <span className="text-xs font-inter text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorem neque itaque minus est architecto, vitae et eligendi,
                  nobis quos aperiam voluptas molestias tenetur eaque obcaecati
                  fugiat saepe iste cum? Illo.
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground">
                <Popover>
                  <PopoverTrigger className="flex items-center gap-1.5 mt-1.5 text-muted-foreground">
                    <Reply />
                    <span className="text-sm">Reply</span>
                  </PopoverTrigger>
                  <CommentReply />
                </Popover>
              </div>
            </div>

            <div className="pl-11 mt-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/user.jpg"
                  alt="user-profile"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <h3 className="font-rubik font-bold">John Doe</h3>
              </div>
              <div className="pl-11">
                <span className="text-xs font-inter text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorem neque itaque minus est architecto, vitae et eligendi,
                  nobis quos aperiam voluptas molestias tenetur eaque obcaecati
                  fugiat saepe iste cum? Illo.
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground">
                <Popover>
                  <PopoverTrigger className="flex items-center gap-1.5 mt-1.5 text-muted-foreground">
                    <Reply />
                    <span className="text-sm">Reply</span>
                  </PopoverTrigger>
                  <CommentReply />
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </div>
  );
};
