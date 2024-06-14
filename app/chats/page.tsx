"use client";

import { useQueryContext } from "@/context/useQueryContext";
import { useEffect } from "react";

function Chat({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || "";
  console.log(query);
  const { setQuery } = useQueryContext();

  useEffect(() => {
    if (query && setQuery) {
      setQuery(query);
    }
  }, [query, setQuery]);

  return <div className="bg-primary">hello</div>;
}
export default Chat;
