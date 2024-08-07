import { Store } from "lucide-react";
import { FeaturedProduct } from "./_components/featured-product";
import { LatestProduct } from "./_components/latest-product";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { FaOpencart } from "react-icons/fa";
import TitleCart from "./_components/title-cart";

const ForemShop = () => {
  return (
    <div className="py-6">
      <div className=" flex justify-between items-center pr-4">
        <div className="flex items-center w-full gap-2 justify-center">
          <Store className="text-primary w-8 h-8" />
          <TitleCart title="Forem Shop" />
        </div>
      </div>
      <div className="flex w-full flex-col items-start mt-14 ">
        <h3 className="font-semibold font-rubik">Featured Product</h3>
        {/** Featured Product Component */}
        <FeaturedProduct />
      </div>
      <div className="flex flex-col items-start mt-14">
        <h3 className="font-semibold font-rubik">Latest Product</h3>
        {/** Latest Product Component */}
        <LatestProduct />
      </div>
      <Link
        href={"/user-dashboard/forem-store/all"}
        className=" flex items-center justify-center w-full"
      >
        <Button size={"lg"} className="mt-8 rounded-[8px]">
          View All
        </Button>
      </Link>
    </div>
  );
};
export default ForemShop;
