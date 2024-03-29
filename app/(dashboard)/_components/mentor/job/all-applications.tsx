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

const AllApplications = () => {
  return (
    <div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Cover</TableHead>
            <TableHead className="text-right">CV</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" [&>*:nth-child(even)]:bg-muted">
          <TableRow>
            <TableCell className="font-medium">John</TableCell>
            <TableCell>
              <Image
                src={"/images/user.jpg"}
                alt="user profile"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </TableCell>
            <TableCell>
              <Link
                href={`/mentor-dashboard/jobs/application/${1}`}
                className="  line-clamp-1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolorem at tenetur aliquid sint, eum soluta magnam adipisci
                veniam iste, sed odio error ullam alias sapiente ad provident
                impedit asperiores?
              </Link>
            </TableCell>
            <TableCell className="text-right">
              <Link href={"#"} download>
                Cv
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default AllApplications;
