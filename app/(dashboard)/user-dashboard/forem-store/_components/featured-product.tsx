import { ForemData } from "@/utils/data/forem-data";
import Image from "next/image";

export const FeaturedProduct = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4 pr-4">
      {ForemData.map((item) => (
        <>
          {item.featured && (
            <div className="bg-muted py-6 px-4 rounded-[8px]" key={item.id}>
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
          )}
        </>
      ))}

      {/* <div className="bg-muted py-6 px-4 rounded-[8px]">Item2</div>
      <div className="bg-muted py-6 px-4 rounded-[8px]">Item3</div> */}
    </div>
  );
};

{
  /** 
  lg:Flex item center
  md: flex flex-col
*/
}
