import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Reviews from "./review-component";
import { mentorDetails } from "@/lib/actions/mentor/fetch-mentor";
import { PlusCircle } from "lucide-react";

const ProfilePage = async () => {
  const { user } = await mentorDetails();
  // console.log(user.user);
  console.log(user);

  return (
    <div className="container mx-auto mt-8 ">
      <div className="flex flex-col gap-8 items-start w-full">
        {/** Profile image and company */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image
              src={user?.photo || "/images/user.jpg"}
              alt="profile picture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1.5">
              <h2 className="font-bold font-inter tracking-wide capitalize">
                {user?.username}
              </h2>
              <span className="text-muted-foreground font-light font-inter text-sm">
                {user?.email}
              </span>
            </div>
          </div>
          {user?.companies ? (
            <>
              {user?.companies.map((comp) => (
                <Link
                  href={`/mentor-dashboard/company/${comp.name}`}
                  key={comp.name}
                >
                  <Button className="rounded-xl" variant={"secondary"}>
                    {comp.name}
                  </Button>
                </Link>
              ))}
            </>
          ) : (
            <>
              <Link
                href={`/mentor-dashboard/company/create`}
                className="flex items-center gap-2"
              >
                <span className="text-lg font-rubik">Add Company</span>
                <PlusCircle className="w-6 h-6 animate-pulse" />
              </Link>
            </>
          )}
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
            <h4 className="font-bold font-rubik">{user?.firstName}</h4>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="first name"
              className="font-inter text-muted-foreground"
            >
              Last Name
            </label>
            <h4 className="font-bold font-rubik">{user?.lastName}</h4>
          </div>
        </div>
        {/** Job Card */}
        <div className="flex flex-col ">
          <h2 className="font-rubik tracking-wide font-semibold">
            My Job Posts
          </h2>
          {!user?.job && <p>No job post available!</p>}
          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
            {user?.job.map((job) => (
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
                      src={
                        job.company?.company_logo ||
                        job.user.photo ||
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
                      {job.position}
                    </h3>
                  </div>
                </Link>
                {/** Description */}
                <span className="text-sm text-muted-foreground font-inter line-clamp-3">
                  {job.description}
                </span>
                <div className="flex justify-between items-center w-full">
                  <div className="p-2 bg-muted rounded">
                    <span className={`capitalize font-rubik `}>{job.type}</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-light font-inter">
                    {job.createAt.toString().slice(0, 10)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/** Reviews */}
        <div className="flex flex-col gap-4">
          <h2 className="font-rubik tracking-wide font-semibold">Reviews</h2>
          {/* {user?.reviews && user?.reviews.length >= 0 ? (
            <>
              {user.reviews.map((reviews) => (
                <Reviews key={reviews.id} reviews={reviews} />
              ))}
            </>
          ) : (
            <>
              <p>No reviews yet!</p>
            </>
          )} */}
          {!user?.reviews || user.reviews.length === 0 ? (
            <>
              <p>No reviews yet!</p>
            </>
          ) : (
            <>
              {user?.reviews.map((reviews) => (
                <Reviews key={reviews.id} reviews={reviews} />
              ))}
            </>
          )}
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
