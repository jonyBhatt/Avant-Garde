"use client";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import { getAllJobPosts } from "@/lib/actions/mentor/job-action";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const FetchJobs = () => {
  const {
    data: job,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["alljobposts"],
    queryFn: async () => await getAllJobPosts(),
  });
  if (isLoading) return <LoadingSkeleton />;
  if (error) return "Error: " + error;

  if (!job?.data || job.data.length <= 0) return <p>No post yet</p>;

  return (
    <div>
      {job.data.map((job) => (
        <div
          key={job.id}
          className="flex w-[300px] flex-col items-start gap-8 p-4  border border-white/[.1]  rounded-[8px] bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] "
        >
          {/** Logo title */}
          <Link
            href={"/mentor-dashboard/jobs/"}
            className="flex items-center gap-4"
          >
            <div>
              <Image
                src={
                  job.company?.company_logo ||
                  job.user.photo ||
                  "/svg/twitter.svg"
                }
                alt={job.company?.name || job.user.firstName}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-inter text-lg font-bold tracking-tight">
                {job.position}
                {/* postion */}
              </h3>
            </div>
          </Link>
          {/** Description */}
          <span className="text-sm text-muted-foreground font-inter line-clamp-3">
            {job.description}
          </span>
          <div className="flex justify-between items-center w-full">
            <div className="p-2 bg-muted rounded">
              <span
                className={`capitalize font-rubik ${
                  job.type === "FULL_TIME"
                    ? "text-primary"
                    : job.type === "PART_TIME"
                    ? "text-pink-500"
                    : "text-orange-600"
                } `}
              >
                {job.type}
              </span>
            </div>
            <span className="text-sm text-muted-foreground font-light font-inter">
              {job.createAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FetchJobs;

/**
 * ${
                        job.job_type === "Full-time"
                          ? "text-primary"
                          : job.job_type === "Part-Time"
                          ? "text-pink-500"
                          : "text-orange-600"
                      }`
 */
