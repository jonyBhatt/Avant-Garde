"use server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { companySchema } from "@/utils/validation";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { handleError } from "@/lib/utils";

type company = z.infer<typeof companySchema>;

/**
 * * Create Company Action
 */

export const createCompany = async (values: company) => {
  const { userId } = auth();
  if (!userId) return null;
  try {
    const company = await prisma.company.create({
      data: {
        name: values.name,
        about: values.about,
        email: values.email,
        location: values.location,
        company_logo: values.company_logo,
        company_url: values.company_url,
        user: {
          connect: {
            clerkId: userId,
          },
        },
      },
    });
    revalidatePath(`/mentor-dashboard/company/${company.name}`);
    return {
      message: "Company registered!",
      company,
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
