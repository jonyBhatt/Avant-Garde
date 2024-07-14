"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Job, User } from "@prisma/client";
import { useRouter } from "next/navigation";
interface ExtendedJob extends Job {
  user: User;
}

interface Jobs {
  jobs: ExtendedJob[];
}

export const TableBodyComponent = ({ jobs }: Jobs) => {
  const router = useRouter();
  const handleRoutePush = (id: string) => {
    router.push(`/admin/job/${id}`);
  };

  return (
    <TableBody className="relative">
      {jobs.map((job) => (
        <TableRow
          key={job.id}
          onClick={() => handleRoutePush(job.id)}
          className="cursor-pointer"
        >
          <TableCell className="font-medium">{job.id}</TableCell>
          <TableCell className="font-medium font-inter">{job.title}</TableCell>
          <TableCell className="line-clamp-1 max-w-24">
            {job.description}
          </TableCell>
          <TableCell className="font-inter">{job.salary}</TableCell>
          <TableCell className="font-inter">
            <Avatar>
              <AvatarImage src={job.user.photo!} />
              <AvatarFallback>{job.user.firstName}</AvatarFallback>
            </Avatar>
          </TableCell>
          <TableCell className="text-right flex justify-end">
            {job.user.firstName}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
