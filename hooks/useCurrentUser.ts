import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/chat/user`);
        if (!response.ok) {
          throw new Error(`Error: ${response.json}`);
        }
        const user = await response.json();

        setCurrentUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return { currentUser };
};

export default useCurrentUser;
