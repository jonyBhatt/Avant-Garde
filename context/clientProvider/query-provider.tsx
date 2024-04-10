"use client";

import { ReactNode, useState } from "react";
import { QueryContext } from "../useQueryContext";

const QueryContextProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};
export default QueryContextProvider;
