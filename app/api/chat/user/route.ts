import { auth } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
export async function POST(request: Request) {
  const { userId } = auth();
  if (!userId) {
    return Response.json("Unauthorize!");
  }
  try {
    const currentUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
      include: {
        following: true,
        followedBy: true,
      },
    });

    return Response.json(currentUser);
  } catch (error) {
    console.log(error);

    return new Response("Internal server error", { status: 500 });
  }
}
