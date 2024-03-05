import { Anchor, Joystick } from "lucide-react";
import JobTypes from "./job-type_component";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import JobExperiment from "./job-experience_component";
const JobSideBar = () => {
  return (
    <div className="flex sm:flex-row md:flex-col gap-4 sm:justify-between sm:items-center md:items-start">
      <h3 className="font-rubik text-lg md:text-2xl ">Filter Jobs</h3>
      <Accordion
        className="flex sm:flex-row md:flex-col gap-4 sm:justify-between sm:items-center md:items-start"
        type="multiple"
      >
        <AccordionItem className="border-b-0 mb-4" value="type">
          <div className="flex flex-col gap-2.5">
            <AccordionTrigger className="gap-4 pb-0">
              <div className="flex items-center gap-1.5">
                <Joystick className="w-4 h-4 text-primary" />
                <h3 className="font-rubik">Job Types</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {/** Job Type Component */}
              <JobTypes />
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem value="experience" className="border-b-0 mb-4">
          <div className="flex flex-col gap-2.5">
            <AccordionTrigger className="gap-4 pb-0">
              <div className="flex items-center gap-1.5">
                <Anchor className="w-4 h-4 text-primary" />
                <h3 className="font-rubik">Experience</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {/** Experience Components */}
              <JobExperiment />
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default JobSideBar;
