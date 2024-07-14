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
import { updateUserRole } from "@/lib/actions/admin/user";
import { Role, User } from "@prisma/client";
import toast from "react-hot-toast";

export const UserTable = ({ user }: { user: User }) => {
  const ChangeRole = async (role: Role) => {
    toast.promise(updateUserRole(user.id, role), {
      loading: "Updating....",
      success: "Update Role",
      error: "Failed to Update Role",
    });
  };
  return (
    <TableRow key={user.id}>
      <TableCell className="">
        <Avatar>
          <AvatarImage src={user.photo as string} />
          <AvatarFallback>{user.firstName}</AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell className="font-inter">{user.firstName}</TableCell>
      <TableCell className="font-inter">{user.email}</TableCell>
      <TableCell className="font-inter">{user.role}</TableCell>
      <TableCell className="">
        <DropdownMenu>
          <DropdownMenuTrigger>Change Role</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="hover:bg-transparent focus:bg-transparent">
              <Button
                variant={"outline"}
                size="lg"
                className="rounded-full"
                onClick={() => ChangeRole("MENTOR")}
              >
                Mentor
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-transparent focus:bg-transparent">
              <Button
                variant={"outline"}
                size="lg"
                className="rounded-full"
                onClick={() => ChangeRole("ADMIN")}
              >
                Admin
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
      <TableCell className="text-right">
        <Button className="rounded-xl" variant="destructive" size={"lg"}>
          Ban
        </Button>
      </TableCell>
    </TableRow>
  );
};
