"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);

    // console.log(params);
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="">
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          className="peer block w-full  rounded-[16px]  py-2.5 px-10 text-sm outline-0 placeholder:text-gray-500 bg-muted "
          placeholder="search..."
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <MdSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
