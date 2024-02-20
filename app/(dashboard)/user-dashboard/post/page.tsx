import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Post = () => {
  return (
    <div className="py-8">
      <Tabs defaultValue="open" className="w-[450px] md:w-full">
        <TabsList>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>
        <TabsContent
          value="open"
          className="my-16 mx-4 p-4 rounded-[8px] bg-muted border border-muted-foreground flex gap-8   items-center"
        >
          <div>
            <Image
              src="/images/user.jpg"
              alt="user profile"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-52  items-start xs:gap-4 md:w-full">
            <div className="flex flex-col gap-1">
              <h3 className="line-clamp-1 font-bold font-rubik">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                atque aliquam dolore beatae quasi, culpa, quaerat voluptatibus
                recusandae nesciunt voluptatem omnis rerum commodi totam tempore
                dignissimos ipsum, a debitis eius!
              </h3>
              <div className="flex items-center gap-4">
                <div className="pl-4 md:px-4 md:py-1 text-xs  bg-dark-pastel-blue">
                  <span className="text-center">Long Term</span>
                </div>
                <div className="flex items-center gap-1.5 line-clamp-1">
                  <span>React</span>
                  <span>React</span>
                  <span>React</span>
                  <span>React</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">
                $15/<span className="font-normal">15 mins</span>
              </p>
            </div>
            <p>2/20/2024</p>
          </div>
        </TabsContent>

        <TabsContent
          value="closed"
          className="my-16 mx-4 p-4 rounded-[8px] bg-muted border border-muted-foreground flex gap-8   items-center"
        >
          <div>
            <Image
              src="/images/user.jpg"
              alt="user profile"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-52  items-start xs:gap-4 md:w-full">
            <div className="flex flex-col gap-1">
              <h3 className="line-clamp-1 font-bold font-rubik">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                atque aliquam dolore beatae quasi, culpa, quaerat voluptatibus
                recusandae nesciunt voluptatem omnis rerum commodi totam tempore
                dignissimos ipsum, a debitis eius!
              </h3>
              <div className="flex items-center gap-4">
                <div className="pl-4 md:px-4 md:py-1 text-xs  bg-dark-pastel-blue">
                  <span className="text-center">Long Term</span>
                </div>
                <div className="flex items-center gap-1.5 line-clamp-1">
                  <span>React</span>
                  <span>React</span>
                  <span>React</span>
                  <span>React</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">
                $15/<span className="font-normal">15 mins</span>
              </p>
            </div>
            <p>2/20/2024</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Post;
