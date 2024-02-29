import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PopoverContent } from "@/components/ui/popover";

export const CommentReply = () => {
  return (
    <div>
      <PopoverContent>
        <div className="flex items-center justify-between gap-4">
          <Input placeholder="reply..." className="rounded-[8px]" />
          <Button variant={"secondary"} className="rounded-[8px]">
            Reply
          </Button>
        </div>
      </PopoverContent>
    </div>
  );
};
