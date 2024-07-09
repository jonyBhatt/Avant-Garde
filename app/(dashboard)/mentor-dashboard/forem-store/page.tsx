import { Button } from "@/components/ui/button";
import { Plus, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UpdateShopProduct } from "./_components/update-product";
import { fetchProductByOwner } from "@/lib/actions/mentor/shop/crud-product";

const ForemShop = async () => {
  const products = await fetchProductByOwner();
  // console.log(id);

  return (
    <div className="py-6 relative">
      <div className="flex items-center gap-2 justify-center">
        <Store className="w-10 h-10 text-primary" />
        <h2 className="font-bold text-3xl font-inter tracking-wider">
          Forem Shop
        </h2>
      </div>

      {/** Fetch all product which created by login user */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-4 pr-4 mt-16 pb-16">
        {/** Card 1 */}
        {products.product && (
          <>
            {products.product.map((product) => (
              <div
                className="border-2  py-6 px-4 rounded-[8px]"
                key={product.id}
              >
                <span className="text-muted-foreground tracking-widest uppercase font-inter font-light text-sm">
                  {/* {item.featuredTitle} */}#{product.category}
                </span>
                <div className="flex flex-col gap-4 mt-4">
                  <Image
                    src={`${product.image}`}
                    alt="p1"
                    width={300}
                    height={300}
                  />
                  <Link
                    href={`/mentor-dashboard/forem-store/${product.id}`}
                    className="font-bold font-rubik text-2xl"
                  >
                    {product.name}
                  </Link>
                  <p className="font-inter text-muted-foreground">
                    Tk {product.priceInCents} BDT
                  </p>
                </div>
                <div className="flex items-center gap-4  justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size={"lg"} className="mt-4 w-full  rounded">
                        Update
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0">
                      <DialogHeader className="p-4">
                        <DialogTitle>Update Product</DialogTitle>
                      </DialogHeader>
                      <div className="">
                        <UpdateShopProduct product={product} />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    size={"lg"}
                    variant={"destructive"}
                    className="mt-4 w-full  rounded"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {products?.product && products.product.length <= 0 && (
        <div className="flex w-full justify-center items-center">
          <h2 className="text-center text-4xl font-inter">
            No product add by you yet! <br />
            Please add product
          </h2>
        </div>
      )}

      <Link
        href={"/mentor-dashboard/forem-store/add"}
        className="absolute bottom-1 bg-secondary w-14 h-14 flex items-center justify-center right-0 mr-4 rounded-full"
      >
        <Plus className="" />
      </Link>
    </div>
  );
};
export default ForemShop;
