"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";

export async function FetchApplication(id?: string) {
  try {
    const app = await prisma.application.findMany({
      include: {
        students: true,
      },
    });
    return { app };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
}

export async function FetchApplicationById(id: string) {
  try {
    const app = await prisma.application.findUnique({
      where:{
        id
      },
      include: {
        students: true,
      },
    });
    return { app };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
}
