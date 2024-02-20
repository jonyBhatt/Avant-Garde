"use server";
import { z } from "zod";

import prisma from "@/lib/prisma";
import { liveHelpSchema } from "@/utils/validation";
import { handleError } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { getStudentById, getUserById } from "./user-crud-action";

type CreateHelpPostProps = z.infer<typeof liveHelpSchema>;

export async function createHelpPost(values: CreateHelpPostProps) {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "User does not exist",
    };
  }

  const studentDetails = await getStudentById(userId);

  const { student, error } = studentDetails;

  if (!student)
    return {
      error: "User does not exist",
    };

  console.log(student.id);

  const { budget, description, helpType, sessionLength, title } = values;

  try {
    await prisma.helpPost.create({
      data: {
        ...values,
        student: {
          connect: {
            id: student.id,
          },
        },
      },
    });
    return {
      message: "Request successful",
    };
  } catch (error) {
    console.log(error);
    return {
      error: handleError(error),
    };
  }
}

export async function getAllPost() {
  try {
    const post = await prisma.helpPost.findMany({
      include: {
        student: true,
      },
    });
    return {
      post,
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
}
