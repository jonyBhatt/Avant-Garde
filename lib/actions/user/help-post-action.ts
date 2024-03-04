"use server";
import { z } from "zod";

import prisma from "@/lib/prisma";
import { liveHelpSchema } from "@/utils/validation";
import { handleError } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { getStudentById, getUserById } from "./user-crud-action";
import { redirect } from "next/navigation";

type CreateHelpPostProps = z.infer<typeof liveHelpSchema>;

export async function createHelpPost(values: CreateHelpPostProps) {
  const { userId, user } = auth();

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

export async function getAllPost(query?: string) {
  try {
    const post = await prisma.helpPost.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        student: true,
        comments: {
          select: {
            content: true,
            id: true,
            createAt: true,
            parentComment: true,
            parentId: true,
            children: true,
            user: {
              select: {
                firstName: true,
                lastName: true,
                id: true,
                photo: true,
              },
            },
          },
        },
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

export async function getOpenPostByStudent() {
  const { userId, user } = auth();

  if (!userId) return { error: "User does not exist" };
  const student = await getStudentById(userId);

  if (!student.student) return null;
  // console.log(student);

  try {
    const post = await prisma.helpPost.findMany({
      where: {
        studentId: student.student.id,
        status: "OPEN",
      },
      select: {
        title: true,
        budget: true,
        createAt: true,
        id: true,
        description: true,
        helpType: true,
        likes: true,
        sessionLength: true,

        student: {
          select: {
            id: true,
            photo: true,
            firstName: true,
            lastName: true,
            c_technical: true,
          },
        },
        comments: {
          orderBy: {
            createAt: "desc",
          },
          select: {
            id: true,
            content: true,
            parentId: true,
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
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
