import SearchBar from "@/components/shared/search-bar";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { TableBodyComponent } from "./_components/table-body";

export default async function AdminJobs() {
  const jobs = await prisma.job.findMany({
    include: {
      user: true,
      company: true,
    },
  });
  // console.log(jobs);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-inter text-left text-2xl font-semibold">Jobs</h2>
        <SearchBar />
      </div>
      <Table className="font-inter mt-8">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="">Salary</TableHead>
            <TableHead className="">Owner Image</TableHead>
            <TableHead className="text-right">Owner Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBodyComponent jobs={jobs} />
      </Table>
    </div>
  );
}
