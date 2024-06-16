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

export const getConversationById = async (id: string) => {
  const { currentUserPrisma } = await getChatUser();
  try {
    const conversation = await prisma.conversation.findUnique({
      where: {
        id,
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

export const getMessages = async (id: string) => {
  const { currentUserPrisma } = await getChatUser();
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: id,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return messages;
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
