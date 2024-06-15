"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { getChatUser } from "./get-chat-current-user";

export const getConversation = async () => {
  const { currentUserPrisma } = await getChatUser();
  try {
    const conversation = await prisma.conversation.findMany({
      where: {
        userId: {
          has: currentUserPrisma.id,
        },
      },
      orderBy: {
        lastMessageAt: "desc",
      },
      include: {
        users: true,
        message: {
          include: {
            seen: true,
            sender: true,
          },
        },
      },
    });
    return conversation;
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
