"use server";

import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { JobSchema } from "@/utils/types";
import { auth } from "@clerk/nextjs";
import { JobType } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getAllJobPosts = async () => {
  try {
    const posts = await prisma.job.findMany({
      include: {
        user: true,
        company: true,
      },
    });
    return {
      data: posts,
      message: "success",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const getJobBySingleMentor = async () => {
  const { userId } = auth();
  if (!userId) return null;
  try {
    const posts = await prisma.job.findMany({
      where: {
        user: {
          clerkId: userId,
        },
      },
      include: {
        user: true,
        company: true,
      },
    });
    return {
      data: posts,
      message: "success",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const getJobPostById = async (id: string) => {
  // console.log(id);
  try {
    const job = await prisma.job.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        company: true,
        applications: true,
      },
    });

    return {
      job,
      message: "success",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const updateJobPost = async (values: JobSchema, id: string) => {
  try {
    const job = await prisma.job.update({
      where: {
        id,
      },
      data: {
        title: values.title,
        description: values.description,
        experience: values.experience,
        location: values.location,
        position: values.position,
        salary: values.salary,
      },
    });

    revalidatePath(`/mentor-dashboard/jobs/${id}`);
    return {
      job,
      message: "Success",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const deleteJobPost = async (id: string) => {
  try {
    await prisma.job.delete({
      where: {
        id,
      },
    });

    return {
      message: "Deleted",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
