import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PopoverContent } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

export const CommentReply = () => {
  return (
    <div>
      <PopoverContent className="w-[380px]">
        <div className="flex items-center flex-col justify-between gap-4">
          <Textarea
            rows={15}
            placeholder="reply..."
            className="rounded-[8px]"
          />
          <Button variant={"secondary"} className="rounded-[8px]">
            Reply
          </Button>
        </div>
      </PopoverContent>
    </div>
  );
};
