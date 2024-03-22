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

/**
 * * Fetch Company by creator
 */

export const fetchCompanyByCreator = async (name: string) => {
  try {
    const company = await prisma.company.findUnique({
      where: {
        name,
      },
      include: {
        jobs: true,
        user: true,
      },
    });
    //@ts-ignore
    // revalidatePath(`/mentor-dashboard/company/${company?.id}`);
    return {
      company,
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

/**
 * * update Company details
 */

export const updateCompany = async (name: string, values: company) => {
  // console.log(values);

  try {
    const updateCompany = await prisma.company.update({
      where: {
        name,
      },
      data: {
        about: values.about,
        company_logo: values.company_logo,
        company_url: values.company_url,
        email: values.email,
        location: values.location,
        name: values.name,
      },
    });
    revalidatePath(`/mentor-dashboard/company/${updateCompany.name}`);
    return {
      message: "hello",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
