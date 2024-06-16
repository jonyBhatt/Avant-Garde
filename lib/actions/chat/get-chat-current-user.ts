"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { auth, currentUser } from "@clerk/nextjs";
import { User as ClerkUser } from "@clerk/nextjs/server";
import { User as PrismaUser } from "@prisma/client";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

interface CurrentUser {
  currentUserClerk: ClerkUser;
  currentUserPrisma: PrismaUser & {
    following: PrismaUser[];
    followedBy: PrismaUser[];
  };
}

export const getChatUser = async (): Promise<CurrentUser> => {
  const { userId } = auth();
  const currentUserClerk = await currentUser();
  if (!currentUserClerk) throw new Error("Unauthorized");
  if (!userId) throw new Error("Unauthorized");

  const currentUserPrisma = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    include: {
      following: true,
      followedBy: true,
    },
  });

  if (!currentUserPrisma) throw new Error("User not found");

  return {
    currentUserPrisma,
    currentUserClerk,
  };
};

export async function getSearchUser(query: string) {
  noStore();
  const { currentUserPrisma } = await getChatUser();

  try {
    const user = await prisma.user.findMany({
      where: {
        OR: [
          {
            email: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            firstName: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
        NOT: [
          {
            email: currentUserPrisma.email,
          },
        ],
      },
      include: {
        following: true,
      },
    });
    return { user };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
}

export async function Contacts(value: string, id: string, convoId?: string) {
  const { currentUserPrisma } = await getChatUser();
  if (!currentUserPrisma.id) {
    return {
      error: "Unauthorized",
    };
  }

  if (value === "add") {
    try {
      const user = await prisma.user.update({
        where: {
          id: currentUserPrisma.id,
        },
        data: {
          following: {
            connect: {
              id,
            },
          },
        },
        include: {
          following: true,
        },
      });

      // Check if conversation exist
      const existConversation = await prisma.conversation.findMany({
        where: {
          OR: [
            {
              userId: {
                equals: [currentUserPrisma.id, id],
              },
            },
            {
              userId: {
                equals: [id, currentUserPrisma.id],
              },
            },
          ],
        },
      });

      const singleConversation = existConversation[0];
      if (singleConversation) {
        return singleConversation;
      }
      await prisma.conversation.create({
        data: {
          ownerId: currentUserPrisma.id,
          users: {
            connect: [
              {
                id: currentUserPrisma.id,
              },
              {
                id,
              },
            ],
          },
        },
      });
      revalidatePath("/chats");

      return user;
    } catch (error) {
      return {
        error: handleError(error),
      };
    }
  }

  if (value === "delete") {
    try {
      // Update the user by disconnecting from the following and followedBy
      const user = await prisma.user.update({
        where: {
          id: currentUserPrisma.id,
        },
        data: {
          following: {
            disconnect: {
              id,
            },
          },
          followedBy: {
            disconnect: {
              id,
            },
          },
        },
        include: {
          following: true,
          followedBy: true,
        },
      });

      // Fetch the conversation to check the number of users
      const conversation = await prisma.conversation.findUnique({
        where: {
          id: convoId,
        },
        include: {
          users: true,
        },
      });

      if (conversation) {
        // Check if the current user is the last one in the conversation
        if (
          conversation.users.length >= 1 &&
          conversation.users[0].id === currentUserPrisma.id &&
          conversation.users[1].id === id
        ) {
          // If the current user is the last one, delete the conversation
          await prisma.conversation.delete({
            where: {
              id: convoId,
            },
          });
        } else {
          // If other users are still part of the conversation, just disconnect the current user
          await prisma.conversation.update({
            where: {
              id: convoId,
            },
            data: {
              users: {
                disconnect: {
                  id: currentUserPrisma.id,
                },
              },
            },
          });
        }
      } else {
        throw new Error("Conversation not found");
      }

      // Revalidate the path to refresh the chats
      revalidatePath("/chats");

      return user;
    } catch (error) {
      return {
        error: handleError(error),
      };
    }
  }
}
