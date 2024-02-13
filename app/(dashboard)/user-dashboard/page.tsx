import Image from "next/image";
import FindMentor from "../_components/user/find-mentor";
import DeveloperEvent from "../_components/user/developers-event";

const UserDashboard = () => {
  return (
    <div className="py-10">
      <h2 className="font-bold font-rubik text-xl">Get started</h2>
      <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-6 pr-4">
        <div className="p-4 shadow-sm shadow-primary rounded-md flex flex-col gap-2 items-center">
          <Image
            src="/svg/get-live-help.svg"
            alt="get live"
            width={50}
            height={50}
          />
          <h2 className="font-semibold">Get live help</h2>
          <span className="text-muted-foreground text-center font-light text-xs lg:text-base font-rubik">
            1:1 mentorship session
          </span>
        </div>

        <div className="p-4 shadow-sm shadow-primary rounded-md flex flex-col gap-2 items-center">
          <Image
            src="/svg/small-task.svg"
            alt="get live"
            width={50}
            height={50}
          />
          <h2 className="font-semibold text-sm">Get freelance help</h2>
          <span className="text-muted-foreground font-light text-sm font-rubik">
            Pay with escrow
          </span>
        </div>

        <div className="p-4 shadow-sm shadow-primary rounded-md flex flex-col gap-2 items-center">
          <Image
            src="/images/code-review.png"
            alt="get live"
            width={50}
            height={50}
          />
          <h2 className="font-semibold text-sm">Get code reviewed</h2>
          <span className="text-muted-foreground font-light text-sm font-rubik">
            Pay with escrow
          </span>
        </div>
      </div>
      <div className="py-4">
        <h2 className="font-bold font-rubik text-xl">Find Mentors</h2>
        <FindMentor />
      </div>
      <div className="my-4 border border-accent p-4 mr-4">
        <div className="flex items-center  gap-2">
          <h2 className="font-bold font-rubik text-xl">
            Developer events for you
          </h2>
          <div className=" py-.5 text-sm px-4  rounded-full bg-secondary">
            Free
          </div>
        </div>
        <span className="text-muted-foreground">
          Learn technical skills and grow your career through free talks and
          events.
        </span>
        <DeveloperEvent />
      </div>
    </div>
  );
};
export default UserDashboard;
