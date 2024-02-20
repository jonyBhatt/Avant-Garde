import Mentor from "@/components/shared/onboard/mentor";
import NormalUser from "@/components/shared/onboard/normal-user";
import { getUserById } from "@/lib/actions/user/user-crud-action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Onboard = async () => {
  const { userId } = auth();

  const user = await getUserById(userId!);

  if (user.user?.onboard) {
    user.user.role === "STUDENT"
      ? redirect("/user-dashboard")
      : user.user.role === "MENTOR"
      ? redirect("/mentor-dashboard")
      : redirect("/admin-dashboard");
  }

  return (
    <div className="container mx-auto p-8 font-rubik">
      <h1 className="text-4xl font-bold mb-8">Welcome to Avant Garde</h1>
      <p className="my-7 text-slate-400 text-sm font-light">
        Welcome to our vibrant community! As you embark on your journey,
        we&apos;re excited to guide you through our platform. <br /> Whether
        you&apos;re here as a regular user or a mentor, we&apos;ve tailored
        unique experiences for both roles.
      </p>
      <div className="flex items-center gap-24">
        <div className="">
          <NormalUser />
          {/* NormalUser */}
        </div>
        <div className="">
          <Mentor />
        </div>
      </div>
    </div>
  );
};
export default Onboard;
