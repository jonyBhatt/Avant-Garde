"use client";

import { ReactNode, useState } from "react";
import { QueryContext } from "../useQueryContext";
import { User } from "@prisma/client";

const QueryContextProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [chatOwner, setChatOwner] = useState<User[]>([])
  return (
    <QueryContext.Provider value={{ query, setQuery, chatOwner, setChatOwner }}>
      {children}
    </QueryContext.Provider>
  );
};
export default QueryContextProvider;
