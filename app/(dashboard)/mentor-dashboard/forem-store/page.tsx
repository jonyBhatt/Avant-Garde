import { Store } from "lucide-react";
import { FeaturedProduct } from "./_components/featured-product";
import { LatestProduct } from "./_components/latest-product";
const ForemShop = () => {
  return (
    <div className="py-6">
      <div className="flex items-center gap-2 justify-center">
        <Store className="w-10 h-10 text-primary" />
        <h2 className="font-bold text-3xl font-inter tracking-wider">
          Forem Shop
        </h2>
      </div>
      <div className="flex flex-col items-start mt-14">
        <h3 className="font-semibold font-rubik">Featured Product</h3>
        {/** Featured Product Component */}
        <FeaturedProduct />
      </div>
      <div className="flex flex-col items-start mt-14">
        <h3 className="font-semibold font-rubik">Latest Product</h3>
        {/** Latest Product Component */}
        <LatestProduct />
      </div>
    </div>
  );
};
export default ForemShop;
