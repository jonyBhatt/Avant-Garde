import { getAllPost } from "@/lib/actions/user/help-post-action";
import { increaseTimeBySeconds } from "@/lib/updateTime";
import Image from "next/image";
const StudentPost = async ({ query }: { query: string }) => {
  const allPosts = await getAllPost(query);

  return (
    <div className="container mx-auto">
      {/** // TODO: Make ui for all posts */}
      <div className="border p-4 bg-transparent rounded-[16px] border-primary w-3/5">
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
      </div>
    </div>
  );
};
export default StudentPost;
