import JobCompanyDescription from "@/app/(dashboard)/_components/mentor/job/job-company-description";
import { JobData } from "@/utils/data/job-data";
import Image from "next/image";
import Link from "next/link";

const JobDescriptionPage = ({ params }: { params: { id: string } }) => {
  const findJob = JobData.find(({ id }) => String(id) === params.id);

  if (!findJob) return "Job Not Found";
  return (
    <div className="py-6 pr-2">
      <div className="grid  lg:grid-cols-[1fr_20rem] gap-8">
        <div className="flex flex-col gap-12 items-start p-4">
          {/** Logo company */}
          <div className="flex items-center gap-2">
            <Image
              src={findJob.company_logo}
              alt={findJob.company_name}
              width={80}
              height={80}
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-inter font-bold text-lg capitalize">
                {findJob.job_position}
              </h3>
              <Link
                href={findJob.company_website}
                className="font-inter font-light text-primary"
              >
                {findJob.company_name}
              </Link>
              <span className="text-xs font-inter font-light text-muted-foreground">
                a few seconds ago
              </span>
            </div>
          </div>
          {/** Cards */}
          <div className="flex flex-col md:flex-row w-full items-center  gap-4 ">
            <div className="py-4 px-8 max-w-[280px] w-full bg-secondary text-center rounded-[8px]  flex flex-col">
              <p className="sm:text-sm md:text-base text-center">Salary</p>
              <h3 className=" text-sm font-inter font-bold">
                {findJob.salary}
              </h3>
            </div>

            <div className="py-4 px-8 max-w-[250px] w-full bg-rose-500 rounded-[8px] text-center flex flex-col">
              <p className="sm:text-sm md:text-base">Job Type</p>
              <h3 className="font-bold sm:text-sm md:text-lg font-inter">
                {findJob.job_type}
              </h3>
            </div>

            <div className="py-4 px-8 max-w-[250px] w-full bg-dark-pastel-blue rounded-[8px] text-center flex flex-col">
              <p className="sm:text-sm md:text-base">No of Applicants</p>
              <h3 className="font-bold sm:text-sm md:text-lg font-inter">
                120
              </h3>
            </div>

            <div className="py-4 px-8 max-w-[250px] w-full bg-emerald-500 rounded-[8px] text-center flex flex-col">
              <p className="sm:text-sm md:text-base">No of vacancies</p>
              <h3 className="font-bold sm:text-sm md:text-lg font-inter">10</h3>
            </div>
          </div>
          {/** Job and company description */}
          <div>
            <JobCompanyDescription
              desc={findJob.job_description}
              req={findJob.requirements}
            />
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
