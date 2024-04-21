"use client"
import { useQueryContext } from "@/context/useQueryContext";
import ChatHead from "../_components/chats/chat-head";

const Chats = ({ searchParams }: { searchParams?: { query: string } }) => {
  // console.log(searchParams?.query);
  const {setQuery} = useQueryContext()
  if(searchParams !== undefined){
    setQuery(searchParams.query)
  }
  
  return (
    <div className="flex flex-col w-full">
      <ChatHead />
    </div>
  );
};
export default Chats;
