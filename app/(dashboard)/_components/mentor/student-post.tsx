"use client";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
} from "lucide-react";
import { Document } from "mongodb";
import { getAllPost } from "@/lib/actions/user/help-post-action";
import { increaseTimeBySeconds } from "@/lib/updateTime";
import { useQuery } from "@tanstack/react-query";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
const StudentPost = ({ query }: { query: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["studentposts"],
    queryFn: async () => await getAllPost(query),
  });

  if (isLoading) return <LoadingSkeleton />;
  if (error) return "Error: " + error;

  console.log(data);

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
              src="/images/user.jpg"
              alt="user profile pictures"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
            <h3 className="font-bold font-rubik text-lg">John Doe</h3>
            <span className="font-rubik text-muted-foreground">
              {increaseTimeBySeconds("2024-02-23T14:19:49.427+00:00")}
            </span>
          </div>
          <div className="px-16 max-w-2xl">
            <div className="border border-muted-foreground p-2 rounded">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, temporibus. Excepturi tenetur fugiat quisquam!
                Praesentium, voluptates culpa. Neque blanditiis expedita
                veritatis inventore modi. Sapiente illo at dicta, repudiandae
                porro amet!
              </span>
            </div>
            <div className="flex items-center gap-8 mt-2 ml-2">
              <div className="flex items-center gap-1 cursor-pointer">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Likes</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Comments</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <MessagesSquare className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Message</span>
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
