"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { auth } from "@clerk/nextjs";

export const getAllJobPosts = async () => {
  try {
    const posts = await prisma.job.findMany({
      include: {
        user: true,
        company: true,
      },
    });
    return {
      data: posts,
      message: "success",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const getJobBySingleMentor = async () => {
  const { userId } = auth();
  if (!userId) return null;
  try {
    const posts = await prisma.job.findMany({
      where: {
        user: {
          clerkId: userId,
        },
      },
      include: {
        user: true,
        company: true,
      },
    });
    return {
      data: posts,
      message: "success",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
