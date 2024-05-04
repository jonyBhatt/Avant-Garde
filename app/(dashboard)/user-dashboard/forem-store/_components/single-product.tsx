"use client";

import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import { Button } from "@/components/ui/button";
import { fetchProductById } from "@/lib/actions/mentor/shop/crud-product";
import { Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

function SingleProductComponent({
  product,
}: {
  product: Product | null | undefined;
}) {
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("S");

  return (
    <div className="py-6 pr-4 mt-20 container mx-auto">
      <div className="flex flex-col gap-6 items-start md:flex-row md:justify-center md:items-center md:gap-16">
        <div className=" w-full">
          <Image
            src={`${product?.image}`}
            alt="product image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="font-rubik text-lg text-muted-foreground">
            Forem Shop
          </h4>
          <h2 className="font-inter tracking-wide text-3xl font-medium">
            {product?.name}
          </h2>
          <p className="font-inter text-muted-foreground">
            Tk {product?.priceInCents} BDT
          </p>
          <code className="font-inter text-wrap text-base text-muted-foreground">
            {product?.description}.
          </code>
          <div className="flex flex-col gap-4 my-6 items-center md:flex-row ">
            <h3 className="font-rubik font-bold text-xl">Select Quantity</h3>

            <Button
              size={"icon"}
              variant={"ghost"}
              className="border"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </Button>
            <h2 className="font-bold font-rubik">{quantity}</h2>
            <Button
              size={"icon"}
              variant={"ghost"}
              className="border"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
          <div className="flex flex-col gap-4 my-6 items-center md:flex-row ">
            <h3 className="font-rubik font-bold text-xl">Select Size</h3>
            <Button
              size={"icon"}
              variant={"ghost"}
              className={`border rounded-full bg-muted ${
                size === "S" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => setSize("S")}
            >
              S
            </Button>
            <Button
              size={"icon"}
              variant={"ghost"}
              className={`border rounded-full bg-muted ${
                size === "M" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => setSize("M")}
            >
              M
            </Button>
            <Button
              size={"icon"}
              variant={"ghost"}
              className={`border rounded-full bg-muted ${
                size === "L" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => setSize("L")}
            >
              L
            </Button>
            <Button
              size={"icon"}
              variant={"ghost"}
              className={`border rounded-full bg-muted ${
                size === "XL" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => setSize("XL")}
            >
              XL
            </Button>
            <Button
              size={"icon"}
              variant={"ghost"}
              className={`border rounded-full bg-muted ${
                size === "XXL" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => setSize("XXL")}
            >
              XXL
            </Button>
            <Button
              size={"icon"}
              variant={"ghost"}
              className={`border rounded-full bg-muted ${
                size === "XXXL" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => setSize("XXXL")}
            >
              3XL
            </Button>
          </div>
          <Button size={"lg"} className="rounded w-full">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
export default SingleProductComponent;
