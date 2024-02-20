import UserOnboard from "@/components/shared/onboard/user-onboard/main-section";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
const UserOnboardScreen = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user) return "User does not exist";
  return (
    <div>
      <UserOnboard user={user} />
    </div>
  );
};
export default UserOnboardScreen;
