"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Contacts } from "@/lib/actions/chat/get-chat-current-user";
import { handleError } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

export const ContactDelete = ({
  id,
  convoId,
}: {
  id: string;
  convoId?: string[];
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  let conversationId = "";
  if (convoId) {
    conversationId = convoId[0];
  }
  console.log(conversationId);

  const Contact = async (value: string, id: string) => {
    console.log(value, id);

    try {
      if (value === "delete") {
        toast.promise(Contacts(value, id, conversationId), {
          loading: "Deleting...",
          success: (data) => {
            router.push("/chats");
            return `Delete Successfully`;
          },
          error: "Error",
        });
      }
    } catch (error) {
      handleError(error);
      toast.error("Something Wrong!");
    }
  };
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <div className="pt-4 flex items-center gap-4">
          <DialogPrimitive.Close className="">
            <span
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
            >
              Close
            </span>
          </DialogPrimitive.Close>
          <Button
            size="lg"
            variant="destructive"
            onClick={() => Contact("delete", id)}
          >
            Delete Contact
          </Button>
        </div>
      </DialogHeader>
    </div>
  );
};
