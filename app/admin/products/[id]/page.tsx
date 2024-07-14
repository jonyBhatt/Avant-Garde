import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Image from "next/image";
export default async function SingleProduct({
  params,
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });

  // console.log(product);

  return (
    <div className="py-6 px-3 h-full flex items-center justify-center">
      <div className="flex flex-col gap-6 items-start md:flex-row md:justify-center md:items-center md:gap-16">
        <div className=" w-full">
          <Image
            src={`${product?.image}`}
            alt="product image"
            width={300}
            height={300}
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
          <Button
            variant={"destructive"}
            size={"lg"}
            className="rounded-[16px]"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
