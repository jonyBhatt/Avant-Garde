"use client"
import { createContext, useContext, useState } from "react";
interface QueryContextType {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const QueryContext = createContext<QueryContextType | undefined>(undefined);

export const useQueryContext = (): QueryContextType => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error(
      "useQueryContext must be used within a QueryContextProvider"
    );
  }
  return context;
};
