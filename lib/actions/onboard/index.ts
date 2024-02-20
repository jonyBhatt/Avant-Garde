"use server";
import prisma from "@/lib/prisma";
import { userOnboardSchema } from "@/utils/validation";
import { z } from "zod";
import { auth, currentUser } from "@clerk/nextjs";
import { handleError } from "@/lib/utils";

export const studentOnboardAction = async (
  values: z.infer<typeof userOnboardSchema>
) => {
  // console.log(values);
  const { userId } = auth();

  if (!userId) return null;

  const {
    c_technical,
    career,
    email,
    firstName,
    lastName,
    major,
    time,
    institution,
    s_technical,
    s_time,
  } = values;
  if (
    !c_technical ||
    !career ||
    !email ||
    !firstName ||
    !lastName ||
    !major ||
    !time
  )
    return { error: "Fields are required" };

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  try {
    await prisma.student.create({
      data: {
        c_technical,
        career,
        major,
        institution,
        time,
        users: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
  return {
    message: "true",
  };
};