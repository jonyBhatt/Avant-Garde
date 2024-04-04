"use client";
import MarkDownPreview from "@/components/shared/markdown/mark-down-preview";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  FetchApplication,
  FetchApplicationById,
} from "@/lib/actions/mentor/application";
import { useQuery } from "@tanstack/react-query";
import { Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SingleApplication = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data, error, isLoading } = useQuery({
    queryKey: ["applicationbyid"],
    queryFn: async () => await FetchApplicationById(id),
  });

  if (error) return "Error..." + error;

  console.log(data);

  return (
    <div className="py-6 container mx-auto">
      <div className="flex flex-col gap-4 w-full">
        <BreadCrumb />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src={`${data?.app?.students?.photo || "/images/user.jpg"}`}
              alt="user profile"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-inter font-bold text-2xl leading-6">
                {data?.app?.students?.firstName}
              </h3>
              <span className="text-primary text-sm font-inter">
                {data?.app?.students?.email}
              </span>
            </div>
          </div>
          <Link href={`${data?.app?.cv}`} download>
            <Button size={"lg"} className="rounded-[8px]">
              Download Cv
            </Button>
          </Link>
        </div>
        <div className="my-4">
          <h3 className="font-inter font-semibold text-lg tracking-wide leading-7 pb-1 border-b-2">
            Cover Letter
          </h3>
          <MarkDownPreview content={`${data?.app?.cover}`} className="mt-8" />
          
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

export default SingleApplication;
