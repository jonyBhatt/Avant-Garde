import SearchBar from "@/components/shared/search-bar";
import StudentPost from "../_components/mentor/student-post";
import { Suspense } from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomDialogContent from "@/components/shared/dialog-content";
import { auth } from "@clerk/nextjs";

const MentorDashBoard = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const { userId } = auth();

  if (!userId) return null;

  return (
    <div className="py-6 px-4 relative">
      <div className="">
        <SearchBar />
      </div>
      <Suspense fallback="Loading..">
        <div className="py-10 container mx-auto justify-center flex">
          <StudentPost query={query} userId={userId} />
        </div>
      </Suspense>
      <div className="sticky bottom-0 ml-auto max-w-max">
        <Dialog>
          <DialogTrigger>
            <div className="p-4 rounded-full bg-primary">
              <IoChatbubblesSharp size={30} />
            </div>
          </DialogTrigger>
          <CustomDialogContent />
        </Dialog>
      </div>
    </div>
  );
};
export default MentorDashBoard;
