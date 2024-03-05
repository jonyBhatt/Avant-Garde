"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const JobCompanyDescription = () => {
  const [description, setDescription] = useState("job");
  return (
    <div>
      <div className="flex items-center gap-4 w-full">
        <Button
          size={"lg"}
          onClick={() => setDescription("job")}
          className={`rounded-full lg:w-[350px] transition-all duration-150 ${
            description === "job"
              ? "bg-dark-light-blue text-black hover:bg-sky-400"
              : "bg-dark-marine-blue text-white hover:bg-slate-800"
          }`}
        >
          Job Description
        </Button>
        <Button
          size={"lg"}
          onClick={() => setDescription("company")}
          className={`rounded-full lg:w-[350px] transition-all duration-150 ${
            description === "company"
              ? "bg-dark-light-blue text-black hover:bg-sky-400"
              : "bg-dark-marine-blue text-white hover:bg-slate-800"
          }`}
        >
          Company Description
        </Button>
      </div>

      {description === "job" && (
        <>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex flex-col gap-1.5">
              <h2 className="font-bold md:text-2xl font-inter">
                Job Description
              </h2>
              <span className="text-sm  font-inter">
                Explore an exciting opportunity as an AI Engineer at AI
                Innovations Ltd. In this role, you will work on cutting-edge
                artificial intelligence projects, developing and implementing
                machine learning algorithms. Candidates should have a
                Master&apos;s degree in AI or a related field, strong
                programming skills, and experience in machine learning. If you
                are passionate about pushing the boundaries of AI technology and
                enjoy working on innovative projects, we invite you to apply.
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="font-bold md:text-2xl font-inter">Requirements</h2>
              <span className="text-sm  font-inter">
                Explore an exciting opportunity as an AI Engineer at AI
                Innovations Ltd. In this role, you will work on cutting-edge
                artificial intelligence projects, developing and implementing
                machine learning algorithms. Candidates should have a
                Master&apos;s degree in AI or a related field, strong
                programming skills, and experience in machine learning. If you
                are passionate about pushing the boundaries of AI technology and
                enjoy working on innovative projects, we invite you to apply.
              </span>
            </div>
          </div>
        </>
      )}

      {description === "company" && (
        <>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex flex-col gap-1.5">
              <h2 className="font-bold md:text-2xl font-inter">
                About Company
              </h2>
              <span className="text-sm  font-inter">
                Explore an exciting opportunity as an AI Engineer at AI
                Innovations Ltd. In this role, you will work on cutting-edge
                artificial intelligence projects, developing and implementing
                machine learning algorithms. Candidates should have a
                Master&apos;s degree in AI or a related field, strong
                programming skills, and experience in machine learning. If you
                are passionate about pushing the boundaries of AI technology and
                enjoy working on innovative projects, we invite you to apply.
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="font-bold md:text-2xl font-inter">Requirements</h2>
              <span className="text-sm  font-inter">
                Explore an exciting opportunity as an AI Engineer at AI
                Innovations Ltd. In this role, you will work on cutting-edge
                artificial intelligence projects, developing and implementing
                machine learning algorithms. Candidates should have a
                Master&apos;s degree in AI or a related field, strong
                programming skills, and experience in machine learning. If you
                are passionate about pushing the boundaries of AI technology and
                enjoy working on innovative projects, we invite you to apply.
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default JobCompanyDescription;
