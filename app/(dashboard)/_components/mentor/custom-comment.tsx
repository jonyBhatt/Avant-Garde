"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Reply } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CommentReply } from "./reply";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createComment } from "@/lib/actions/mentor/comment-action";

const formSchema = z.object({
  content: z.string().optional(),
});

export const CustomComment = ({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, postId, userId);
    const res = await createComment({
      content: values.content as string,
      postId,
      userId,
    });

    console.log(res.comments?.content);
  }
  return (
    <div>
      <DialogContent className=" ">
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 z-10"
            >
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comment</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="comment..."
                        {...field}
                        className="rounded-[8px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size={"sm"}
                className="rounded-[8px] text-white"
              >
                Comment
              </Button>
            </form>
          </Form>
          <div className="flex flex-col  gap-1 mt-4 overflow-y-scroll custom-scrollbar h-52">
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

// 01732964013
