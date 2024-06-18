"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader, Paperclip, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { messageSchema } from "@/utils/validation";
import { useTransition } from "react";
import { createMessage } from "@/lib/actions/chat/conversation";

interface SendMessageFormProps {
  conversationId: string;
}
export const SendMessageForm = ({ conversationId }: SendMessageFormProps) => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      body: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof messageSchema>) {
    console.log(values);
    startTransition(async ()=>{
      await createMessage(values, conversationId)
    })
    form.reset();
  }
  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex w-full items-center justify-between"
        >
          <div className="flex items-center gap-8">
            <Dialog>
              <DialogTrigger>
                <Paperclip className="w-5 h-5" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Hello</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem className="w-3/4">
                  <FormControl>
                    <Input
                      placeholder="type here "
                      {...field}
                      className="border-none  focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {isSubmitting ? (
            <>
              <div className="flex p-4  items-center justify-center gap-2 bg-transparent hover:bg-gray-700 rounded-full">
                <Loader size={16} />
                <span>Sending..</span>
              </div>
            </>
          ) : (
            <Button
              type="submit"
              size={"lg"}
              className="flex p-4  items-center justify-center gap-2 bg-transparent hover:bg-gray-700 rounded-full"
            >
              <Send size={16} />
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};
