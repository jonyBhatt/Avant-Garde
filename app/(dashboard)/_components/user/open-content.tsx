"use client";
import { TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import prisma from "@/lib/prisma";
import {
  getAllPost,
  getOpenPostByStudent,
} from "@/lib/actions/user/help-post-action";
import { Loader2 } from "lucide-react";

const OpenContent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["helppost"],
    queryFn: async () => await getOpenPostByStudent(),
  });
  console.log(data);
  if (isLoading)
    return (
      <div className="container mx-auto my-28 flex justify-center items-center">
        <Loader2 className="animate-spin w-6 h-6" />
      </div>
    );
  if (error) return "Error" + error;

  if (data?.post && data?.post.length <= 0)
    return (
      <div className="container mx-auto my-16">
        <h3>No post yet!</h3>
        <span>Make request for getting a better mentor</span>
      </div>
    );
  return (
    <>
      {data?.post?.map((p) => (
        <TabsContent
          value="open"
          className="my-16 mx-4 p-4 rounded-[8px] bg-muted border border-muted-foreground flex gap-8   items-center"
          key={p.id}
        >
          <div>
            <Image
              src={p.student.photo || "/images/user.jpg"}
              alt="user profile"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-52  items-start xs:gap-4 md:w-full">
            <div className="flex flex-col gap-1">
              <h3 className="line-clamp-1 font-bold font-rubik">{p.title}</h3>
              <div className="flex items-center gap-4">
                <div className="pl-4 md:px-4 md:py-1 text-xs  bg-dark-pastel-blue">
                  <span className="text-center">{p.helpType}</span>
                </div>
                <div className="flex items-center gap-1.5 line-clamp-1">
                  {p.student.c_technical}
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">
                ${p.budget}/<span className="font-normal">15 mins</span>
              </p>
            </div>
            {/** // TODO: show create time */}
            <p>{p.createAt.toString().slice(0, 15)}</p>
          </div>
        </TabsContent>
      ))}
    </>
  );
};

export default OpenContent;
