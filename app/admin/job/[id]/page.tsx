import JobCompanyDescription from "@/app/(dashboard)/_components/mentor/job/job-company-description";
import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
export default async function AdminJobDetails({
  params,
}: {
  params: { id: string };
}) {
  const job = await prisma.job.findUnique({
    where: {
      id: params.id,
    },
    include: {
      user: true,
      company: true,
      _count: true,
    },
  });

  const { currentUserPrisma } = await getChatUser();

  if (!currentUserPrisma) return null;

  return (
    <div className="py-6 pr-2 ">
      <div className="grid  lg:grid-cols-[1fr_20rem] gap-8">
        <div className="flex flex-col gap-12 items-start p-4">
          {/** Logo company */}
          <div className="flex items-center gap-2">
            <Image
              src={
                job?.company?.company_logo ||
                job?.user.photo ||
                "/svg/twitter.svg"
              }
              alt={job?.company?.name! || job?.user.firstName!}
              width={80}
              height={80}
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-inter font-bold text-lg capitalize">
                {/* {findJob.job_position} */}
                {job?.position}
              </h3>
              <Link
                href={job?.company?.email || "https://www.wikipedia.org/"}
                className="font-inter font-light text-primary"
              >
                {/* {findJob.company_name} */}
                {job?.company?.name || job?.user.firstName}
              </Link>
              <span className="text-xs font-inter font-light text-muted-foreground">
                {job?.createAt.toString().slice(0, 10)}
              </span>
            </div>
          </div>
          {/** Cards */}
          <div className="flex flex-col md:flex-row w-full items-center  gap-4 ">
            <div className="py-4 px-8 max-w-[280px] w-full bg-secondary text-center rounded-[8px]  flex flex-col">
              <p className="sm:text-sm md:text-base text-center">Salary</p>
              <h3 className=" text-sm font-inter font-bold">
                {/* {findJob.salary} */}
                {job?.salary}
              </h3>
            </div>

            <div className="py-4 px-8 max-w-[250px] w-full bg-rose-500 rounded-[8px] text-center flex flex-col">
              <p className="sm:text-sm md:text-base">Job Type</p>
              <h3 className="font-bold text-sm font-inter">
                {/* {findJob.job_type} */}
                {job?.type}
              </h3>
            </div>

            <div className="py-4 px-8 max-w-[250px] w-full bg-dark-pastel-blue rounded-[8px] text-center flex flex-col">
              <p className="sm:text-sm md:text-base">No of Applicants</p>
              <h3 className="font-bold text-sm font-inter">
                {job?._count.applications}
              </h3>
            </div>

            <div className="py-4 px-8 max-w-[250px] w-full bg-emerald-500 rounded-[8px] text-center flex flex-col">
              <p className="sm:text-sm md:text-base">No of vacancies</p>
              <h3 className="font-bold text-sm font-inter">{job?.vacancies}</h3>
            </div>
          </div>
          {/** Job and company description */}
          <div>
            <JobCompanyDescription
              job_desc={job?.description!}
              com_desc={job?.company?.about}
              id={job?.id!}
              role="ADMIN"
            />
          </div>
          {/** Applications for this job */}
          {/* <div className="mt-4 w-full">
            <h2 className="font-rubik text-lg font-semibold">Applications</h2>
            <AllApplications id={data.job.id} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
