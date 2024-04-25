import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex justify-between items-center mt-8">
        <div>
          <Image
            src={"/forem/e1.jpg"}
            alt="product image"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4  md:flex-row md:items-center md:justify-around w-full">
          <div className="flex flex-col items-start gap-1">
            <h2 className="font-medium capitalize">
              DEV Challenges classic tee
            </h2>
            <span className="text-muted-foreground text-sm">TK 28,00</span>
            <span className="text-muted-foreground text-sm">Size: S</span>
          </div>
          <div className="flex items-center -ml-5 gap-4">
            <div className="p-4 border-2 flex items-center gap-8">
              <Minus className="w-4 h-4" />
              <span>1</span>
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <Trash className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <span>Tk</span>
          <span>2,800</span>
        </div>
      </div>
      <Separator className="h-1 mt-6" />
      <div className="mt-8 flex xs:justify-center xs:items-center sm:items-end sm:justify-end sm:flex-row xs:flex-col gap-4">
        <p className="font-semibold text-xl">Estimate total</p>
        <span>Tk 2,800</span>
      </div>
    </div>
  );
};
export default CartPage;
