"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { FetchApplication } from "@/lib/actions/mentor/application";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const AllApplications = ({id}:{id:string}) => {
  const router = useRouter()
  const { data, error, isLoading } = useQuery({
    queryKey: ["application"],
    queryFn: async () => await FetchApplication(id),
  });

  if (error) return "Error..." + error;

  console.log(data);

  return (
    <div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="text-right">CV</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" [&>*:nth-child(even)]:bg-muted">
          {data?.app?.map((job) => (
            <TableRow key={job.id} onClick={()=>{router.push(`/mentor-dashboard/jobs/application/${job.id}`)}} className="cursor-pointer">
              <TableCell className="font-medium">
                {job.students?.firstName}
              </TableCell>
              <TableCell>
                <Image
                  src={`${job.students?.photo || "/images/user.jpg"} `}
                  alt="user profile"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </TableCell>

              <TableCell className="text-right">
                <Link href={`${job.cv}`} download>
                  Cv
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default AllApplications;
