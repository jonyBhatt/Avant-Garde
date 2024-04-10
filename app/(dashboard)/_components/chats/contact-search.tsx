"use client";

import SearchBar from "@/components/shared/search-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQueryContext } from "@/context/useQueryContext";
import { getSearchUser } from "@/lib/actions/chat/get-chat-current-user";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { User } from "@prisma/client";

const AddContact = () => {
  const { query } = useQueryContext();
  const [data, setData] = useState<User[] | undefined>(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getSearchUser(query);
        setData(user.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();

    return () => {
      // Cleanup function
      // Any cleanup logic you want to perform goes here
      // For example, if you have any subscriptions or ongoing operations that need to be cancelled, you can do it here
    };
  }, [query]);

  const Contact = async (value: string, id: string) => {
    console.log(value, id);
  };

  const contact = true;
  return (
    <div className="mt-4 px-4 mb-4">
      <SearchBar className="border-0 focus:border-b-2 focus:border-primary focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-background" />

      {data?.map((u) => (
        <div className="mt-5 flex flex-col gap-4 px-4" key={u.id}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src={` ${u.photo} `}
                alt="user profile"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="text-lg font-inter font-bold">{u.firstName}</h3>
            </div>
            {/* {u.followingIds ? (
              <>
                <Button
                  type="submit"
                  variant={"destructive"}
                  size={"lg"}
                  className="rounded-3xl"
                  onClick={() => Contact("delete", u.id)}
                >
                  Delete Contact
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="submit"
                  size={"lg"}
                  className="rounded-3xl"
                  onClick={() => Contact("add", u.id)}
                >
                  New Contact
                </Button>
              </>
            )} */}
            <Button
              type="submit"
              variant={"destructive"}
              size={"lg"}
              className="rounded-3xl"
              onClick={() => Contact("delete", u.id)}
            >
              Delete Contact
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddContact;
