"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const mentorDetails = async () => {
  const { userId } = auth();
  if (!userId)
    return {
      error: "User does not exist!",
    };
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
      select: {
        clerkId: true,
        companies: true,
        email: true,
        firstName: true,
        job: {
          include: {
            company: true,
            user: true,
          },
        },
        photo: true,
        lastName: true,
        username: true,
        reviews: {
          include: {
            mentor: true,
            student: {
              select: {
                firstName: true,
                id: true,
                photo: true,
              },
            },
          },
        },
      },
    });
    revalidatePath("/mentor-dashboard/profile");
    return {
      user,
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
