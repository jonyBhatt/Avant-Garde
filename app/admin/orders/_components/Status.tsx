"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const Status = () => {
  const [productStatus, setProductStatus] = useState("Status");
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          productStatus === "Pending"
            ? "bg-blue-500"
            : productStatus === "Delivered"
            ? "bg-green-400"
            : productStatus === "Out of stock"
            ? "bg-red-500"
            : "bg-gray-500",
          "py-1 px-4 rounded-full "
        )}
      >
        {productStatus}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select status of the product</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setProductStatus("Pending")}>
          Pending
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setProductStatus("Delivered")}>
          Deliver
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setProductStatus("Out of stock")}>
          Out of stock
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// py-1 px-4 rounded-full  bg-gray-500
{
  /* <div
className="py-1 px-4 rounded-full bg-gray-500 cursor-pointer"
onClick={() => setOpen(!open)}
>
<span>{productStatus}</span>
<div
  className={`absolute top-10 right-0 z-10 w-[200px] h-[200px]  border rounded-md shadow-md ${
    open ? "block" : "hidden"
  }`}
>
  <div className="py-2 px-4">
    <button
      onClick={() => setProductStatus("Available")}
      className={`text-sm font-medium ${
        productStatus === "Available" ? "text-blue-500" : "text-gray-5"
      }`}
    >
      Available
    </button>
  </div>
</div>
</div> */
}
