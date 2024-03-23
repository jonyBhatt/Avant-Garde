"use client";
import AllApplications from "@/app/(dashboard)/_components/mentor/job/all-applications";
import JobCompanyDescription from "@/app/(dashboard)/_components/mentor/job/job-company-description";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import { getJobPostById } from "@/lib/actions/mentor/job-action";
import { JobData } from "@/utils/data/job-data";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const JobDescriptionPage = ({ params }: { params: { id: string } }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["agetjobbyid"],
    queryFn: async () => await getJobPostById(params.id),
  });
  if (isLoading) return <LoadingSkeleton />;
  if (error) return "Error: " + error;
  if (!data?.job) return "Job Not Found";
  return (
    <div className="py-6 pr-2 ">
      <div className="grid  lg:grid-cols-[1fr_20rem] gap-8">
        <div className="flex flex-col gap-12 items-start p-4">
          {/** Logo company */}
          <div className="flex items-center gap-2">
            <Image
              src={
                data.job.company?.company_logo ||
                data.job.user.photo ||
                "/svg/twitter.svg"
              }
              alt={data.job.company?.name || data.job.user.firstName}
              width={80}
              height={80}
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-inter font-bold text-lg capitalize">
                {/* {findJob.job_position} */}
                {data.job.position}
              </h3>
              <Link
                href={data.job.company?.email || "https://www.wikipedia.org/"}
                className="font-inter font-light text-primary"
              >
                {/* {findJob.company_name} */}
                {data.job.company?.name || data.job.user.firstName}
              </Link>
              <span className="text-xs font-inter font-light text-muted-foreground">
                {data.job.createAt.toString().slice(0, 10)}
              </span>
            </div>
          </div>
          {/** Cards */}
          <div className="flex flex-col md:flex-row w-full items-center  gap-4 ">
            <div className="py-4 px-8 max-w-[280px] w-full bg-secondary text-center rounded-[8px]  flex flex-col">
              <p className="sm:text-sm md:text-base text-center">Salary</p>
              <h3 className=" text-sm font-inter font-bold">
                {/* {findJob.salary} */}
                {data.job.salary}
              </h3>
            </div>

            <div className="py-4 px-8 max-w-[250px] w-full bg-rose-500 rounded-[8px] text-center flex flex-col">
              <p className="sm:text-sm md:text-base">Job Type</p>
              <h3 className="font-bold text-sm font-inter">
                {/* {findJob.job_type} */}
                {data.job.type}
              </h3>
            </div>

            <div className="py-4 px-8 max-w-[250px] w-full bg-dark-pastel-blue rounded-[8px] text-center flex flex-col">
              <p className="sm:text-sm md:text-base">No of Applicants</p>
              <h3 className="font-bold text-sm font-inter">120</h3>
            </div>

            <div className="py-4 px-8 max-w-[250px] w-full bg-emerald-500 rounded-[8px] text-center flex flex-col">
              <p className="sm:text-sm md:text-base">No of vacancies</p>
              <h3 className="font-bold text-sm font-inter">
                {data.job.vacancies}
              </h3>
            </div>
          </div>
          {/** Job and company description */}
          <div>
            <JobCompanyDescription
              job_desc={data.job.description}
              com_desc={data.job.company?.about}
              id={data.job.id}
            />
          </div>
          {/** Applications for this job */}
          <div className="mt-4 w-full">
            <h2 className="font-rubik text-lg font-semibold">Applications</h2>
            <AllApplications />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold font-rubik text-sm leading-5 tracking-wide">
            Similar Posts
          </h3>
          {JobData.map((job) => (
            <div
              key={job.id}
              className="flex w-[300px] flex-col items-start gap-8 p-4  border border-white/[.1]  rounded-[8px] bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] "
            >
              {/** Logo title */}
              <Link
                href={`/mentor-dashboard/jobs/${job.id}`}
                className="flex items-center gap-4"
              >
                <div>
                  <Image
                    src={job.company_logo || "/svg/twitter.svg"}
                    alt={job.company_name}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h3 className="font-inter text-lg font-bold tracking-tight">
                    {job.job_position}
                  </h3>
                </div>
              </Link>
              {/** Description */}
              <span className="text-sm text-muted-foreground font-inter line-clamp-3">
                {job.job_description}
              </span>
              <div className="flex justify-between items-center w-full">
                <div className="p-2 bg-muted rounded">
                  <span
                    className={`capitalize font-rubik ${
                      job.job_type === "Full-time"
                        ? "text-primary"
                        : job.job_type === "Part-Time"
                        ? "text-pink-500"
                        : "text-orange-600"
                    }`}
                  >
                    {job.job_type}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground font-light font-inter">
                  a few second ago
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default JobDescriptionPage;

/**
 * ${
                    job.job_type === "Full-time"
                      ? "text-primary"
                      : job.job_type === "Part-Time"
                      ? "text-pink-500"
                      : "text-orange-600"
                  }`
 */
