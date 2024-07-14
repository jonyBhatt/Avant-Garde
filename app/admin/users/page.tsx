import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import SearchBar from "@/components/shared/search-bar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { UserTable } from "./_components/UserTable";
import { MentorApplicationTable } from "./_components/MentorApplications";

export default async function AdminUsers() {
  const users = await prisma.user.findMany({
    include: {
      student: true,
    },
  });
  const applications = await prisma.mentorApplication.findMany({
    include: {
      student: {
        select: {
          photo: true,
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
  // console.log(jobs);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-inter text-left text-2xl font-semibold">Users</h2>
        <SearchBar />
      </div>
      <Table className="font-inter mt-8">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="">Role</TableHead>
            <TableHead className="">Change Role</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <UserTable user={user} key={user.id} />
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-8">
        <h2 className="font-inter text-left text-2xl font-semibold">
          Applications for mentor
        </h2>
        <SearchBar />
      </div>
      <Table className="font-inter mt-8">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <MentorApplicationTable
              //@ts-ignore
              application={application}
              key={application.id}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
