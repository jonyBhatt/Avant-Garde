import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { JobData } from "@/utils/data/job-data";
import { PlusCircle } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import AddPostForm from "./add-post-form";

const MyJobPost = () => {
  const company = false;
  return (
    <div>
      <div className="flex justify-end items-center gap-4 pr-4">
        <Dialog>
          <DialogTrigger className="flex items-center gap-2">
            <span className="text-lg font-rubik">Add Post</span>
            <PlusCircle className="w-6 h-6" />
          </DialogTrigger>
          <DialogContent>
            <AddPostForm />
          </DialogContent>
        </Dialog>
        {company && (
          <Accordion type="single" collapsible>
            <AccordionItem value="aboutcompany" className="border-b-0">
              <AccordionTrigger className="flex items-center gap-2 ">
                <Image
                  src={"/svg/wapp.svg"}
                  alt="company_logo"
                  width={30}
                  height={30}
                />
                <h3 className="font-bold font-rubik text-lg">Company Name</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <Link href={"#"}>Update Company Details</Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
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
  );
};
export default MyJobPost;
