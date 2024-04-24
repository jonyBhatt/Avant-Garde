import { Plus, Store } from "lucide-react";
import Link from "next/link";

const ForemShop = () => {
  return (
    <div className="py-6 relative">
      <div className="flex items-center gap-2 justify-center">
        <Store className="w-10 h-10 text-primary" />
        <h2 className="font-bold text-3xl font-inter tracking-wider">
          Forem Shop
        </h2>
      </div>
      <Link
        href={"/mentor-dashboard/forem-store/add"}
        className="absolute bottom-64 bg-secondary w-14 h-14 flex items-center justify-center right-0 mr-4 rounded-full"
      >
        <Plus className="" />
      </Link>
    </div>
  );
};
export default ForemShop;
