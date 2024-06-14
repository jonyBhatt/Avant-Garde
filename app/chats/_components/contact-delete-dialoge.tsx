"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Contacts } from "@/lib/actions/chat/get-chat-current-user";
import { handleError } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import toast from "react-hot-toast";

export const ContactDelete = ({ id }: { id: string }) => {
  const Contact = async (value: string, id: string) => {
    console.log(value, id);
    try {
      await Contacts(value, id);
      if (value === "add") {
        toast.success("Added Contact");
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
