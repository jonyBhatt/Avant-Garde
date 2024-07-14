"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";

import { MentorApplication, Role, Student } from "@prisma/client";
import toast from "react-hot-toast";
interface MentorApplicationProps {
  application: MentorApplication & {
    student: Student;
  };
  // ChangeRole: (role: Role) => Promise<void>;
  // student: Student;
  // role: Role;
  //
}
export const MentorApplicationTable = ({
  application,
}: {
  application: MentorApplicationProps;
}) => {
  // const ChangeRole = async (role: Role) => {
  //   toast.promise(updatestudentRole(student.id, role), {
  //     loading: "Updating....",
  //     success: "Update Role",
  //     error: "Failed to Update Role",
  //   });
  // };
  return (
    <TableRow key={application.application.id}>
      <TableCell className="">
        <Avatar>
          <AvatarImage src={application.application.student.photo as string} />
          <AvatarFallback>
            {application.application.student.firstName}
          </AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell className="font-inter">
        {application.application.student.firstName}
      </TableCell>
      <TableCell className="font-inter">
        {application.application.student.email}
      </TableCell>
      <TableCell className="font-inter">
        {application.application.description}
      </TableCell>
    </TableRow>
  );
};
