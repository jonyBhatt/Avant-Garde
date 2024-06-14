"use client";
import CustomCarousel from "@/components/shared/custom-carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { checkOutData } from "@/utils/data/cart-data";
import Image from "next/image";

export const CheckoutProductDetails = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* <div className="flex justify-between items-center">
        <h2 className="font-inter font-semibold tracking-wide">Product Name</h2>
        <span className="font-inter text-muted-foreground">&#x9F3; 2000</span>
      </div>
      <div className="mt-4">
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src="/forem/e1.jpg" alt="" width={1000} height={1000} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src="/forem/e2.jpg" alt="" width={1000} height={1000} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src="/forem/e3.jpg" alt="" width={1000} height={1000} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div>
        <p>Product Description</p>
      </div> */}
      <CustomCarousel products={checkOutData} />
    </div>
  );
};
