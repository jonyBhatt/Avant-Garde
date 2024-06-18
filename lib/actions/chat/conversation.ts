"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { getChatUser } from "./get-chat-current-user";
import * as z from "zod";
import { messageSchema } from "@/utils/validation";

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

export const createMessage = async (
  value: z.infer<typeof messageSchema>,
  conversationId: string
) => {
  const { currentUserPrisma } = await getChatUser();
  try {
    const message = await prisma.message.create({
      data: {
        body: value.body,
        image: value.image,
        conversation: {
          connect: {
            id: conversationId,
          },
        },
        sender: {
          connect: {
            id: currentUserPrisma.id,
          },
        },
        seen: {
          connect: {
            id: currentUserPrisma.id,
          },
        },
      },
      include: {
        sender: true,
        seen: true,
      },
    });

    const updateConversation = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
        message: {
          connect: {
            id: message.id,
          },
        },
      },
      include: {
        users: true,
        message: {
          include: {
            seen: true,
          },
        },
      },
    });

    return message;
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
