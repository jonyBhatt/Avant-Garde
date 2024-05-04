"use client";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/utils/types";
import { ShoppingBag } from "lucide-react";



const AddToCartButton = ({product}:{product:ProductType }) => {
  return (
    <div className="mt-8">
      <Button className="rounded  w-full flex items-center gap-2">
        Add to Cart <ShoppingBag className="w-4 h-4" />
      </Button>
    </div>
  );
};
export default AddToCartButton;
