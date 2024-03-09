"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";

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
