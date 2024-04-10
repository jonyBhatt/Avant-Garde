import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const body = await req.json();
  const { query } = body;
  try {
    const user = await prisma.user.findMany({
      where: {
        OR: [
          {
            firstName: query as string,
          },
          {
            email: query as string,
          },
        ],
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal server error", { status: 500 });
  }
}
