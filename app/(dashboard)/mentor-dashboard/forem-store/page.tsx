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

const ForemShop = () => {
  // function getRandomID() {
  //   const randomNumber = Math.floor(Math.random() * 10) + 1;
  //   return  + randomNumber;
  // }
  const id = Math.floor(Math.random() * 10) + 1;
  console.log(id);

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
        <div className="border-2  py-6 px-4 rounded-[8px]">
          <span className="text-muted-foreground tracking-widest uppercase font-inter font-light text-sm">
            {/* {item.featuredTitle} */}
            #MUG
          </span>
          <div className="flex flex-col gap-4 mt-4">
            <Image src={`/forem/e1.jpg`} alt="p1" width={300} height={300} />
            <h2 className="font-bold font-rubik text-2xl">Mug</h2>
            <p className="font-inter text-muted-foreground">Tk 2000 BDT</p>
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
                  <UpdateShopProduct id={id} />
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

        {/** Card 2 */}
        <div className="border-2  py-6 px-4 rounded-[8px]">
          <span className="text-muted-foreground tracking-widest uppercase font-inter font-light text-sm">
            {/* {item.featuredTitle} */}
            #MUG
          </span>
          <div className="flex flex-col gap-4 mt-4">
            <Image src={`/forem/e1.jpg`} alt="p1" width={300} height={300} />
            <h2 className="font-bold font-rubik text-2xl">Mug</h2>
            <p className="font-inter text-muted-foreground">Tk 2000 BDT</p>
          </div>
          <Button size={"lg"} className="mt-4 w-full rounded">
            Update
          </Button>
        </div>

        {/** Card 3 */}
        <div className="border-2  py-6 px-4 rounded-[8px]">
          <span className="text-muted-foreground tracking-widest uppercase font-inter font-light text-sm">
            {/* {item.featuredTitle} */}
            #MUG
          </span>
          <div className="flex flex-col gap-4 mt-4">
            <Image src={`/forem/e1.jpg`} alt="p1" width={300} height={300} />
            <h2 className="font-bold font-rubik text-2xl">Mug</h2>
            <p className="font-inter text-muted-foreground">Tk 2000 BDT</p>
          </div>
          <Button size={"lg"} className="mt-4 w-full rounded">
            Update
          </Button>
        </div>

        {/** Card 4 */}
        <div className="border-2  py-6 px-4 rounded-[8px]">
          <span className="text-muted-foreground tracking-widest uppercase font-inter font-light text-sm">
            {/* {item.featuredTitle} */}
            #MUG
          </span>
          <div className="flex flex-col gap-4 mt-4">
            <Image src={`/forem/e1.jpg`} alt="p1" width={300} height={300} />
            <h2 className="font-bold font-rubik text-2xl">Mug</h2>
            <p className="font-inter text-muted-foreground">Tk 2000 BDT</p>
          </div>
          <Button size={"lg"} className="mt-4 w-full rounded">
            Update
          </Button>
        </div>

        {/** Card 5 */}
        <div className="border-2  py-6 px-4 rounded-[8px]">
          <span className="text-muted-foreground tracking-widest uppercase font-inter font-light text-sm">
            {/* {item.featuredTitle} */}
            #MUG
          </span>
          <div className="flex flex-col gap-4 mt-4">
            <Image src={`/forem/e1.jpg`} alt="p1" width={300} height={300} />
            <h2 className="font-bold font-rubik text-2xl">Mug</h2>
            <p className="font-inter text-muted-foreground">Tk 2000 BDT</p>
          </div>
          <Button size={"lg"} className="mt-4 w-full rounded">
            Update
          </Button>
        </div>
      </div>

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
