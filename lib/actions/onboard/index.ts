"use server";
import prisma from "@/lib/prisma";
import { userOnboardSchema } from "@/utils/validation";
import { z } from "zod";
import { currentUser } from "@clerk/nextjs";

export const studentOnboardAction = async (
  values: z.infer<typeof userOnboardSchema>
) => {
  // console.log(values);

  const user = await currentUser();
  if (!user) return null;
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

  // try {
  //   const createUser = await prisma.user.upsert({
  //     where: {
  //       email,
  //     },
  //     create: {
  //       firstName,
  //       lastName,
  //       email,
  //       onboard: true,
  //       username: user?.username!,
  //       clerkId: user?.id,
  //     },
  //     update: {
  //       onboard: true,
  //     },
  //   });

  //   const student = await prisma.student.create({
  //     data: {
  //       c_technical,
  //       career,
  //       major,
  //       time,
  //       institution,
  //       s_technical,
  //       s_time,
  //       userEmail: createUser.email,
  //     },
  //   });
  //   return {
  //     message: "success",
  //   };
  // } catch (error) {
  //   return { error };
  // }
  return {
    message: "true",
  };
};
