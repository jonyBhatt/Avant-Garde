"use client";
import Image from "next/image";
import Link from "next/link";
import { JobData } from "@/utils/data/job-data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import MyJobPost from "./job-my_post";
import FetchJobs from "./fetch-jobs";
const JobMainContent = () => {
  const [togglePosts, setTogglePosts] = useState("allpost");
  return (
    <div className="flex flex-col items-start gap-6 pr-2">
      <div className="flex justify-between items-center gap-8">
        <Button
          onClick={() => setTogglePosts("allpost")}
          className={`rounded-[16px] px-8 font-inter ${
            togglePosts === "allpost"
              ? "bg-pink-500 text-white font-bold transition-all duration-150 hover:bg-pink-300 "
              : ""
          }`}
        >
          All Posts
        </Button>
        <Button
          onClick={() => setTogglePosts("mypost")}
          className={`rounded-[16px] px-8 font-inter ${
            togglePosts === "mypost"
              ? "bg-pink-500 text-white font-bold transition-all duration-150 hover:bg-pink-300 "
              : ""
          }`}
        >
          My Posts
        </Button>
      </div>

      {togglePosts === "allpost" && (
        <>
          <div className="flex justify-between items-center w-full">
            <h3 className="text-lg">
              Showing <b>100</b> Jobs Available
            </h3>
            <span>Sort By</span>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
            <FetchJobs />
          </div>
        </>
      )}

      {togglePosts === "mypost" && (
        <>
          <div className="py-4 w-full">
            <MyJobPost />
          </div>
        </>
      )}
    </div>
  );
};
export default JobMainContent;
