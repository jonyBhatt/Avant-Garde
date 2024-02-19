"use server";
import { z } from "zod";

import prisma from "@/lib/prisma";
import { liveHelpSchema } from "@/utils/validation";
import { handleError } from "@/lib/utils";
import { auth } from "@clerk/nextjs";

type CreateHelpPostProps = z.infer<typeof liveHelpSchema>;

export async function createHelpPost(values: CreateHelpPostProps) {
  const { userId } = auth();
  if (!userId) return null;
  const validInputs = liveHelpSchema.safeParse(values);

  if (validInputs.success) {
    const { title, description, budget, helpType, sessionLength } =
      validInputs.data;

    try {
      await prisma.helpPost.create({
        data: {
          title,
          budget,
          description,
          helpType,
          sessionLength,
          student: {
            connect: {
              id: userId,
            },
          },
        },
      });
    } catch (error) {
      return {
        error: handleError(error),
      };
    }
  }
}
