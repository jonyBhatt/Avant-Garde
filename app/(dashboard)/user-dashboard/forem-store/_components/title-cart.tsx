"use client";
import useCart from "@/hooks/UseCart";
import Link from "next/link";
import { FaOpencart } from "react-icons/fa";
export default function TitleCart({ title }: { title: string }) {
  const cart = useCart();
  return (
    <div className="flex justify-between items-center pr-8 w-full">
      <div className="flex items-center gap-2 justify-center">
        <h2 className="font-bold text-3xl font-inter tracking-wider">
          {title}
        </h2>
      </div>
      <div className="relative ">
        <Link href={"/user-dashboard/forem-store/cart"}>
          <FaOpencart className="w-8 h-8" />
        </Link>
        <div className="absolute -top-2 -right-4 rounded-full w-6 h-6 flex items-center justify-center bg-secondary text-secondary-foreground">
          {cart.cartItems.length}
        </div>
      </div>
    </div>
  );
}
