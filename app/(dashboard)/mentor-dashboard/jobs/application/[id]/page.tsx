import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Slash } from "lucide-react";
import Image from "next/image";

const AllApplication = () => {
  return (
    <div className="py-6 container mx-auto">
      <div className="flex flex-col gap-4 w-full">
        <BreadCrumb />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src={"/images/user.jpg"}
              alt="user profile"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-inter font-bold text-2xl leading-6">Name</h3>
              <span className="text-primary text-sm font-inter">Email</span>
            </div>
          </div>
          <Button size={"lg"} className="rounded-[8px]">
            Download Cv
          </Button>
        </div>
        <div className="my-4">
          <h3 className="font-inter font-semibold text-lg tracking-wide leading-7">
            Cover Letter
          </h3>

          <span className="block   my-4">
            <p className="font-bold">[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, Zip Code]</p>
            <p>[Your Email Address]</p>
            <p>[Your Phone Number]</p>
            <p>[Date]</p>

            <br />
            <br />

            <p className="font-bold">[Hiring Manager&apos;s Name]</p>
            <p className="font-bold">[Company Name]</p>
            <p>[Company Address]</p>
            <p>[City, State, Zip Code]</p>

            <br />
            <br />

            <p>
              Dear{" "}
              <span className="font-bold">[Hiring Manager&apos;s Name]</span>,
            </p>
            <br />
            <p>
              I am writing to express my interest in the Junior ReactJS
              Developer position at{" "}
              <span className="font-bold">[Company Name]</span>, as advertised.
              With a solid foundation in ReactJS development and a passion for
              creating engaging web applications, I am excited about the
              opportunity to contribute to your team and further develop my
              skills in a dynamic environment.
            </p>

            <p>
              During my studies and previous professional experiences, I have
              gained hands-on experience with ReactJS and its ecosystem. I am
              proficient in building responsive and user-friendly web
              applications using React components, hooks, and Redux for state
              management. I have also worked with popular libraries and
              frameworks such as React Router and Material-UI to enhance the
              functionality and design of web applications.
            </p>

            <p>
              One of my recent projects involved collaborating with a team of
              developers to build a React-based e-commerce platform from
              scratch. Through this experience, I developed a strong
              understanding of component-based architecture, code organization,
              and version control using Git. I am comfortable working in an
              Agile environment, participating in sprint planning, and
              contributing to team discussions to solve complex problems
              effectively.
            </p>

            <p>
              What excites me most about the opportunity at{" "}
              <span className="font-bold">[Company Name]</span> is the chance to
              work with a team of talented developers on innovative projects
              that make a real impact. I am eager to bring my enthusiasm for
              ReactJS development and my commitment to continuous learning to
              your team. I am confident that my skills and enthusiasm make me a
              strong candidate for this role.
            </p>

            <p>
              Thank you for considering my application. I am looking forward to
              the opportunity to discuss how my background, skills, and
              enthusiasm align with the needs of your team. Please find my
              resume attached for your review. I am available for an interview
              at your earliest convenience and can be reached at{" "}
              <span className="font-bold">[Your Phone Number]</span> or via
              email at <span className="font-bold">[Your Email Address]</span>.
            </p>

            <p>Thank you for your time and consideration.</p>
            <br />
            <p>Sincerely,</p>
            <p className="font-bold">[Your Name]</p>
          </span>
        </div>
        <Button size={"lg"} className="rounded-[8px]">
          Send Mail
        </Button>
      </div>
    </div>
  );
};

const BreadCrumb = () => {
  return (
    <div className="py-4 font-rubik rounded-xl px-4 bg-muted">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/mentor-dashboard">
              Mentor Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/mentor-dashboard/jobs">Job</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Application</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default AllApplication;
