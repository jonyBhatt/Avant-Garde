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

  if (!user)
    return {
      error: "User does not exist",
    };

  try {
    await prisma.student.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        c_technical,
        career,
        major,
        institution,
        time,
        email: user.email,
        photo: user.photo,
        users: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    await prisma.user.update({
      where: {
        clerkId: userId,
      },
      data: {
        onboard: true,
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
