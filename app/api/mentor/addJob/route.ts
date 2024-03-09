import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { JobSchema } from "@/utils/types";
import { auth } from "@clerk/nextjs";
import { handleError } from "@/lib/utils";

export async function POST(req: NextRequest): Promise<any> {
  const body = await req.json();
  const { userId } = auth();
  if (!userId) return { error: "user does not exists" };
  console.log(body);
  const {
    title,
    type,
    location,
    vacancies,
    experience,
    description,
    position,
    salary,
  } = body;

  const newVacancies = Number(vacancies);

  try {
    await prisma.job.create({
      data: {
        title,
        description,
        experience,
        position,
        salary,
        vacancies: newVacancies,
        location,
        type,
        user: {
          connect: {
            clerkId: userId,
          },
        },
      },
    });
    return new Response("Success", {
      status: 201,
    });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
