"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { auth } from "@clerk/nextjs";

export async function updateRole() {
  const { userId } = auth();
  if (!userId) return null;
  await prisma.user.update({
    where: {
      clerkId: userId,
    },
    data: {
      onboard: true,
      role: "MENTOR",
    },
  });

  return {
    messgae: "Success",
  };
}

export async function getUserById(clerkId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId,
      },
    });
    console.log(user);

    return { user };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
}

export async function getStudentById(clerkId: string) {
  try {
    const user = await getUserById(clerkId);
    console.log(user);

    if (!user.user)
      return {
        error: "User does not exists",
      };
    const student = await prisma.student.findUnique({
      where: {
        email: user.user.email,
      },
    });
    // console.log(student);

    return {
      student,
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
}
