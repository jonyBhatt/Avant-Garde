import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartComponent from "../_components/cart-component";

const CartPage = () => {
  return (
    <div className="py-6 pr-4">
      <div className="flex justify-between items-center">
        <h2 className="font-medium font-rubik text-3xl">Your Cart</h2>
        <Link href={"/user-dashboard/forem-store/all"}>
          <span className="text-sm text-muted-foreground font-inter font-light underline">
            Continue shopping
          </span>
        </Link>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center  font-inter">
          <span className="text-muted-foreground text-base">Product</span>
          <div className="md:flex hidden items-center justify-around w-full">
            <span className="text-muted-foreground text-base md:block xs:hidden">
              Title
            </span>
            <span className="text-muted-foreground text-base md:block xs:hidden">
              Quantity
            </span>
          </div>
          <span className="text-muted-foreground text-base">Total</span>
        </div>
      </div>
      <Separator className="h-1 mt-4" />
      <CartComponent />
    </div>
  );
};
export default CartPage;
