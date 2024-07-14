import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
export default async function AdminProduct() {
  const products = await prisma.product.findMany();
  // console.log(products);

  return (
    <div>
      <h2 className="font-inter text-left text-2xl font-semibold">Products</h2>
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-4 pr-4 mt-16 pb-16">
          {/** Card 1 */}
          {products && (
            <>
              {products.map((product) => (
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
                      href={`/admin/products/${product.id}`}
                      className="font-bold font-rubik text-2xl"
                    >
                      {product.name}
                    </Link>
                    <p className="font-inter text-muted-foreground">
                      Tk {product.priceInCents} BDT
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
