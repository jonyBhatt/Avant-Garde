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
      await prisma.conversation.create({
        data: {
          ownerId: currentUserPrisma.id,
          users: {
            connect: user.following.map((followingUser) => ({
              id: followingUser.id,
            })),
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
        },
        include: {
          following: true,
        },
      });
      await prisma.conversation.delete({
        where: {
          id: convoId,
        },
        include: {
          users: true,
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
}
