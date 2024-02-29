"use client";
import Image from "next/image";
import { MessageCircle, MessagesSquare } from "lucide-react";

import { getAllPost } from "@/lib/actions/user/help-post-action";
import { increaseTimeBySeconds } from "@/lib/updateTime";
import { useQuery } from "@tanstack/react-query";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import CustomDialogContent from "@/components/shared/dialog-content";
import Likes from "./likes";
import { CustomComment } from "./custom-comment";
const StudentPost = ({ query }: { query: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["studentposts"],
    queryFn: async () => await getAllPost(query),
  });

  if (isLoading) return <LoadingSkeleton />;
  if (error) return "Error: " + error;

  console.log(data);
  if (!data?.post) return <p>No post yet</p>;

  return (
    <div className="flex flex-col gap-8">
      {/** // TODO: Make ui for all posts */}
      {data?.post.map((p) => (
        <div
          key={p.id}
          className="border flex flex-col  p-4 bg-transparent rounded-[16px] border-primary max-w-2xl"
        >
          <div className="flex items-center gap-4">
            <Image
              src={p.student.photo || "/images/user.jpg"}
              alt="user profile pictures"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
            <h3 className="font-bold font-rubik text-lg">
              {p.student.firstName}
            </h3>
            <span className="font-rubik text-muted-foreground">
              {increaseTimeBySeconds(p.createAt.toString())}
            </span>
          </div>
          <div className="px-16 max-w-2xl">
            <div className="border border-muted-foreground p-4 rounded">
              <span className="text-xs font-inter">{p.description}</span>
            </div>
            <div className="flex items-center gap-8 mt-2 ml-2">
              <Likes />
              <Dialog>
                <DialogTrigger>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      Comments
                    </span>
                  </div>
                </DialogTrigger>
                <CustomComment />
              </Dialog>
              <div className="flex items-center gap-1 cursor-pointer">
                <Dialog>
                  <DialogTrigger className="flex items-center gap-1">
                    <MessagesSquare className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      Message
                    </span>
                  </DialogTrigger>
                  <CustomDialogContent />
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default StudentPost;

//{ posts }: { posts: Document[] | undefined }
