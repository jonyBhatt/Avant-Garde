import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import prisma from "@/lib/prisma";
import { Status } from "./_components/Status";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Orders() {
  const orders = await prisma.order.findMany({ include: { products: true } });
  return (
    <div>
      <h2 className="font-inter text-left text-2xl font-semibold">Orders</h2>
      <Table className="font-inter">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="relative">
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">
                <Avatar>
                  <AvatarImage src={order.products.image} />
                  <AvatarFallback>{order.products.name}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium font-inter">
                {order.products.name}
              </TableCell>
              <TableCell>{order.products.priceInCents}</TableCell>
              <TableCell className="text-right flex justify-end">
                <Status />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
