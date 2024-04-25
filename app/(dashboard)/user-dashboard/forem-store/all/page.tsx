import { ForemData } from "@/utils/data/forem-data";
import Image from "next/image";

function AllProducts() {
  return (
    <div className="py-6">
      <h2 className="font-semibold font-rubik text-3xl tracking-wide leading-7 capitalize">
        All products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-9 pr-4">
        {ForemData.map((item) => (
          <>
            <div
              className="border-2  shadow-sm shadow-primary py-6 px-4 rounded-[8px]"
              key={item.id}
            >
              <span className="text-muted-foreground tracking-widest uppercase font-inter font-light text-sm">
                {item.featuredTitle}
              </span>
              <div className="flex flex-col gap-4 mt-4">
                <Image src={`${item.url}`} alt="p1" width={300} height={300} />
                <h2 className="font-bold font-rubik text-2xl">{item.name}</h2>
                <p className="font-inter text-muted-foreground">
                  Tk {item.price} BDT
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
