import SearchBar from "@/components/shared/search-bar";
import StudentPost from "../_components/mentor/student-post";

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
      <div className="flex justify-end items-end">
        <SearchBar />
      </div>
      <div className="py-10">
        <StudentPost query={query} />
      </div>
    </div>
  );
};
export default MentorDashBoard;
