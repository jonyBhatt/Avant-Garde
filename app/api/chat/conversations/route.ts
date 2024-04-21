import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const body = await req.json();
  const { userId } = body;
  // console.log(userId);

  const { currentUserPrisma } = await getChatUser();
  if (!currentUserPrisma.id) {
    return new NextResponse("Unauthorized", { status: 403 });
  }
  try {
    // Existing Conversation
    const existingConversation = await prisma.conversation.findMany({
      where: {
        OR: [
          {
            userId: {
              equals: [currentUserPrisma.id, userId],
            },
          },
          {
            userId: {
              equals: [userId, currentUserPrisma.id],
            },
          },
        ],
      },
    });

    const singleConversation = existingConversation[0];

    if (singleConversation) {
      return NextResponse.json(singleConversation);
    }

    // New Conversation
    const newConversation = await prisma.conversation.create({
      data: {
        ownerId: currentUserPrisma.id,
        users: {
          connect: [
            {
              id: currentUserPrisma.id,
            },
            {
              id: userId,
            },
          ],
        },
      },
    });
    return NextResponse.json(newConversation);
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Error", { status: 500 });
  }
}
