import prisma from "@/lib/prisma";
import { userOnboardSchema } from "@/utils/validation";
import { z } from "zod";
import { currentUser } from "@clerk/nextjs";

export const StudentOnboardCreate = async (
  values: z.infer<typeof userOnboardSchema>
) => {
  const user = await currentUser();
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

  try {
    const createUser = await prisma.user.upsert({
      where: {
        email: user?.emailAddresses[0].emailAddress,
      },
      create: {
        firstName,
        lastName,
        email,
      },
      update: {
        onboard: true,
      },
    });

    const student = await prisma.student.create({
      data: {
        c_technical,
        career,
        major,
        time,
        institution,
        s_technical,
        s_time,
        userEmail: createUser.email,
      },
    });
    return {
      student,
      message: "success",
    };
  } catch (error) {
    return { error };
  }
};
