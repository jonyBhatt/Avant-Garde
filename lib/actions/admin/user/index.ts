"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { Role } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateUserRole = async (id: string, value: Role) => {
  try {
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        role: value,
        updateAt: new Date(),
      },
    });
    revalidatePath("/admin/user");
    return updateUser;
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
