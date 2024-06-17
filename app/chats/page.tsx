"use client";

import { useQueryContext } from "@/context/useQueryContext";
import Image from "next/image";
import { useEffect } from "react";

function Chat({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || "";
  // console.log(query);
  const { setQuery } = useQueryContext();

  useEffect(() => {
    if (query && setQuery) {
      setQuery(query);
    }
  }, [query, setQuery]);

  return (
    <div className="h-svh flex justify-center items-center flex-col">
      <Image
        src="/logo/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="object-cover"
      />
      <span className="font-inter tracking-wide text-lg">
        Send and receive messages through our platform chat feature
      </span>
    </div>
  );
}
export default Chat;
