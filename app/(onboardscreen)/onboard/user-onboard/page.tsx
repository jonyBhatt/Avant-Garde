import UserOnboard from "@/components/shared/onboard/user-onboard/main-section";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const UserOnboardScreen = async () => {
  const user = await currentUser();
  if (!user || !user.emailAddresses[0].emailAddress) {
    return redirect("/sign-in");
  }
  return (
    <div>
      <UserOnboard />
    </div>
  );
};
export default UserOnboardScreen;
