import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import OpenContent from "../../_components/user/open-content";
import ClosedContent from "../../_components/user/closed-content";

const Post = () => {
  return (
    <div className="py-8">
      <Tabs defaultValue="open" className="w-[450px] md:w-full">
        <TabsList>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <OpenContent />
        <ClosedContent />
      </Tabs>
    </div>
  );
};
export default Post;
