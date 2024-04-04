"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { applyJobSchemaType } from "@/utils/validation";
import { currentUser } from "@clerk/nextjs";

export async function applyJob(id: string, values: applyJobSchemaType) {
  const user = await currentUser();
  if (!user) return null;
  try {
    await prisma.application.create({
      data: {
        cv: values.cv,
        cover: values.letter,
        jobId: id,
        studentEmail: user.emailAddresses[0].emailAddress,
      },
    });
    return {
      message: "Job apply successful",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
}
