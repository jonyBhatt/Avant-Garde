"use client";

import SearchBar from "@/components/shared/search-bar";
import { QueryContextType, useQueryContext } from "@/context/useQueryContext";
import {
  Contacts,
  getSearchUser,
} from "@/lib/actions/chat/get-chat-current-user";
import { handleError } from "@/lib/utils";
import { User } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

interface CurrentUserProps {
  currentUser: User & {
    following: User[];
  };
}

const AddContact = ({ currentUser }: CurrentUserProps) => {
  const { query } = useQueryContext();
  const [data, setData] = useState<User[] | undefined>(undefined);
  const [contacts, setContacts] = useState<User[]>([]);
  const { setChatOwner }: QueryContextType = useQueryContext();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getSearchUser(query as string);
        setData(user.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();

    if (currentUser && currentUser?.following !== undefined) {
      setContacts(currentUser.following);
      //@ts-ignore
      setChatOwner(currentUser.following);
    }

    return () => {};
  }, [query, currentUser, setChatOwner]);

  const Contact = async (value: string, id: string) => {
    console.log(value, id);
    try {
      // await Contacts(value, id);
      toast.promise(Contacts(value, id), {
        loading: "Adding to contact...",
        success: (data) => {
          return `Added to contact successfully`;
        },
        error: "Error",
      });
    } catch (error) {
      handleError(error);
      toast.error("Something Wrong!");
    }
  };

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
            {contacts &&
            contacts.filter((item) => item.id === u.id).length > 0 ? (
              <>
                <Button
                  variant={"destructive"}
                  className="rounded-2xl"
                  size={"lg"}
                  onClick={() => Contact("delete", u.id)}
                >
                  Delete Contact
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="rounded-2xl"
                  size={"lg"}
                  onClick={() => Contact("add", u.id)}
                >
                  Add Contact
                </Button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddContact;
