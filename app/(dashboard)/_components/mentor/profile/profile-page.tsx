import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Reviews from "./review-component";

const ProfilePage = () => {
  return (
    <div className="container mx-auto mt-8 ">
      <div className="flex flex-col gap-8 items-start w-full">
        {/** Profile image and company */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/user.jpg"}
              alt="profile picture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-bold font-inter tracking-wide">Username</h2>
              <span className="text-primary font-light font-inter text-sm">
                Email
              </span>
            </div>
          </div>
          <Link href={"/mentor-dashboard/company"}>
            <Button className="rounded-xl" variant={"secondary"}>
              View Company
            </Button>
          </Link>
        </div>
        {/** Fist name and last name */}
        <div className="flex gap-28 w-full items-center">
          <div className="flex flex-col">
            <label
              htmlFor="first name"
              className="font-inter text-muted-foreground"
            >
              First Name
            </label>
            <h4 className="font-bold font-rubik">John</h4>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="first name"
              className="font-inter text-muted-foreground"
            >
              Last Name
            </label>
            <h4 className="font-bold font-rubik">Doe</h4>
          </div>
        </div>
        {/** Job Card */}
        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          <div className="flex w-[300px] flex-col items-start gap-8 p-4  border border-white/[.1]  rounded-[8px] bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] ">
            {/** Logo title */}
            <Link
              href={`/mentor-dashboard/jobs/`}
              className="flex items-center gap-4"
            >
              <div>
                <Image
                  src={
                    //   job.company?.company_logo ||
                    //   job.user.photo ||
                    "/svg/twitter.svg"
                  }
                  alt={"hello"}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-inter text-lg font-bold tracking-tight">
                  {/* {job.position} */}
                  Position
                </h3>
              </div>
            </Link>
            {/** Description */}
            <span className="text-sm text-muted-foreground font-inter line-clamp-3">
              {/* {job.description} */}
              description
            </span>
            <div className="flex justify-between items-center w-full">
              <div className="p-2 bg-muted rounded">
                <span className={`capitalize font-rubik `}>
                  {/* {job.type} */}
                  Type
                </span>
              </div>
              <span className="text-sm text-muted-foreground font-light font-inter">
                {/* {job.createAt.toString().slice(0, 10)} */}
                Created at
              </span>
            </div>
          </div>
        </div>
        {/** Reviews */}
        <div className="flex flex-col gap-4">
          <h2 className="font-rubik tracking-wide font-semibold">Reviews</h2>
          <Reviews />
        </div>
        {/** Update Delete Button */}
        <div className="flex justify-end items-center gap-4 w-full">
          <Button variant={"outline"} size={"lg"} className="rounded-xl">
            Update
          </Button>
          <Button variant={"destructive"} size={"lg"} className="rounded-xl">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;

/***
 * ${
                    //   job.type === "FULL_TIME"
                    //     ? "text-primary"
                    //     : job.type === "PART_TIME"
                    //     ? "text-pink-500"
                    //     : "text-orange-600"
                    }
 */
