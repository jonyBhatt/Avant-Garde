"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { updateRole } from "@/lib/actions/user/user-crud-action";

const Mentor = () => {
  const router = useRouter();

  const updateRoleMentor = async () => {
    await updateRole();
    router.push("/mentor-dashboard");
  };
  return (
    <div>
      <div className="text-3xl font-bold mb-4">🤝 Empower, Guide, Impact:</div>
      <p className="text-gray-400">
        Mentors play a crucial role in shaping the community. Share your
        expertise, guide aspiring individuals, and make a lasting impact. Your
        knowledge is a beacon that lights the path for others.
      </p>
      <p className="text-gray-400 mt-4">
        🌐 <strong>Create Mentorship Opportunities:</strong> Facilitate
        mentorship programs and engage with users seeking guidance. Foster an
        environment where learning is collaborative, and expertise is shared.
        Your influence has the power to inspire.
      </p>
      <p className="text-gray-400 mt-4">
        🔍 <strong>Identify and Support Talent:</strong> Identify emerging
        talents within the community and offer support. As a mentor, your role
        extends beyond knowledge-sharing &U+2013; it&apos;s about nurturing
        potential and fostering a culture of growth.
      </p>
      <Button className="rounded-full px-6 my-8" onClick={updateRoleMentor}>
        Apply to mentor
      </Button>
    </div>
  );
};
export default Mentor;
