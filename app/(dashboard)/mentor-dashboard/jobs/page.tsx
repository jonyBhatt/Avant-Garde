import JobMainContent from "../../_components/mentor/job/job-main_content";
import JobSideBar from "../../_components/mentor/job/job-side_bar";

const Jobs = () => {
  return (
    <div className="py-8 ">
      <div className="grid md:grid-cols-[240px_1fr] items-start gap-4">
        {/** Side Bar */}
        <div className=" ">
          <JobSideBar />
        </div>
        {/** Main Content */}
        <div className="  ">
          <JobMainContent />
        </div>
      </div>
    </div>
  );
};
export default Jobs;
