"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UpdateJobPost from "./update-job-post";
import { usePathname, useRouter } from "next/navigation";
import { deleteJobPost } from "@/lib/actions/mentor/job-action";
import Link from "next/link";

const JobCompanyDescription = ({
  job_desc,
  com_desc,
  id,
}: {
  job_desc: string;
  com_desc?: string;
  id: string;
}) => {
  const pathname = usePathname();
  const modifyPath = pathname.slice(0, 15);
  const router = useRouter();
  const [description, setDescription] = useState("job");
  const handleDelete = async () => {
    await deleteJobPost(id);
    router.push("/mentor-dashboard/jobs");
  };
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
              <span className="text-sm  font-inter">{job_desc}</span>
            </div>

            <div className="flex items-center gap-4 w-full">
              {modifyPath === "/user-dashboard" ? (
                <>
                  <Link href={`/user-dashboard/jobs/apply/${id}`}>
                    <Button size={"lg"} className="rounded-[8px] w-full">
                      Apply for this job
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size={"lg"} className="rounded-[8px]">
                        Update
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <UpdateJobPost id={id} />
                    </DialogContent>
                  </Dialog>
                  <Button
                    size={"lg"}
                    variant={"destructive"}
                    className="rounded-[8px]"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </>
              )}
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
              <span className="text-sm  font-inter">{com_desc}</span>
              {modifyPath === "/user-dashboard" && (
                <Link href={`/user-dashboard/jobs/apply/${id}`}>
                  <Button size={"lg"} className="rounded-[8px] w-full">
                    Apply for this job
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default JobCompanyDescription;
