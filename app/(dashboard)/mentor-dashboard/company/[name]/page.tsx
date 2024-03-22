import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Reviews from "@/app/(dashboard)/_components/mentor/profile/review-component";
import { fetchCompanyByCreator } from "@/lib/actions/mentor/company";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import UpdateCompany from "@/app/(dashboard)/_components/mentor/company/update-company-form";

const CompanyDetails = async ({ params }: { params: { name: string } }) => {
  const paramsName = params.name;
  const mainName = paramsName.replace(/%20/g, " ");
  // console.log(mainName);

  const { company } = await fetchCompanyByCreator(mainName);
  // console.log(company);

  return (
    <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col items-start w-full gap-6">
        {/** Logo Company title */}
        <div className="flex items-center gap-2">
          <Image
            src={company?.company_logo || "/logo/preview.jpg"}
            alt="company logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="font-semibold font-rubik text-2xl tracking-wide">
              {company?.name}
            </h2>
            <Link
              href={company?.company_url || "#"}
              className="flex items-center gap-1"
            >
              <span className="text-sm  text-muted-foreground">
                {company?.company_url}
              </span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
        {/** About Company */}
        <div className="flex flex-col gap-1 max-w-lg overflow-auto whitespace-pre-line ">
          <h2 className="font-inter text-lg font-semibold  tracking-wide">
            About Company
          </h2>
          <code className="text-sm break-words font-light font-inter my-4 leading-6 text-gray-300">
            {company?.about}
          </code>
        </div>
        {/** Job card */}
        <div>
          <h2 className="font-inter font-semibold leading-4 tracking-wide">
            Jobs
          </h2>
          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
            {company?.jobs && company.jobs.length === 0 && (
              <p>
                No job available for{" "}
                <b className="font-rubik font-semibold text-lg tracking-wide">
                  {company?.name}
                </b>
              </p>
            )}
            {company?.jobs.map((job) => (
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
                        company.company_logo ||
                        company.user.photo ||
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
        {/** Update Delete Button */}
        <div className="flex items-center gap-4 w-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"} size={"lg"} className="rounded-xl">
                Update
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-auto">
              <SheetHeader>
                <SheetTitle className="font-inter text-lg font-semibold  tracking-wide">
                  Update Company
                </SheetTitle>
              </SheetHeader>
              <UpdateCompany
                name={company?.name || ""}
                about={company?.about || ""}
                company_logo={company?.company_logo || ""}
                company_url={company?.company_url || ""}
                email={company?.email || ""}
                location={company?.location || ""}
              />
            </SheetContent>
          </Sheet>

          <Button variant={"destructive"} size={"lg"} className="rounded-xl">
            Delete
          </Button>
        </div>
      </div>
      <div>
        <h2 className="font-inter text-lg font-semibold  tracking-wide mt-4 mb-8">
          Reviews
        </h2>
        <Reviews className="text-gray-300" />
      </div>
    </div>
  );
};
export default CompanyDetails;
