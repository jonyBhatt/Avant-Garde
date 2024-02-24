import SearchBar from "@/components/shared/search-bar";
import StudentPost from "../_components/mentor/student-post";
import { Suspense } from "react";
import Await from "@/lib/await-promise";
import { getAllPost } from "@/lib/actions/user/help-post-action";
import { randomUUID } from "crypto";

const MentorDashBoard = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || "";

  return (
    <div className="py-6 px-4">
      <div className="">
        <SearchBar />
      </div>
      <Suspense fallback="Loading..">
        <div className="py-10 container mx-auto justify-center flex">
          <StudentPost query={query} />
        </div>
      </Suspense>
    </div>
  );
};
export default MentorDashBoard;
