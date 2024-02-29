"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { CommentProps } from "@/utils/types";

export const createComment = async (values: CommentProps) => {
  const { content, postId, userId } = values;

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });
  try {
    const comments = await prisma.comment.create({
      data: {
        content,
        postId,
        userId: user?.id as string,
      },
    });
    return { comments };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
