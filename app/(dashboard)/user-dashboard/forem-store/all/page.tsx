import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import AllProductsWithCart from "../_components/title-cart";
async function AllProducts() {
  const products = await prisma.product.findMany();
  // console.log(products);

  return (
    <div className="py-6">
      <AllProductsWithCart title="All products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-9 pr-4">
        {products.map((item) => (
          <>
            <div
              className="border-2  shadow-sm shadow-primary py-6 px-4 rounded-[8px]"
              key={item.id}
            >
              <span className="text-muted-foreground tracking-widest uppercase font-inter font-light text-sm">
                {item.category}
              </span>
              <div className="flex flex-col gap-4 mt-4">
                <Image
                  src={`${item.image}`}
                  alt="p1"
                  width={300}
                  height={300}
                />
                <Link
                  href={`/user-dashboard/forem-store/${item.id}`}
                  className="font-bold font-rubik text-2xl"
                >
                  {item.name}
                </Link>
                <p className="font-inter text-muted-foreground">
                  Tk {item.priceInCents} BDT
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
export default AllProducts;
