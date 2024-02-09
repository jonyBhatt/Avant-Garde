"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const NormalUser = () => {
  const router = useRouter();
  return (
    <div>
      <div className="text-3xl font-bold mb-4">🚀 Discover, Engage, Learn:</div>
      <p className="text-gray-400">
        As a regular user, dive into a world of endless possibilities. Explore
        diverse content, connect with like-minded individuals, and enhance your
        skills. Our platform is your canvas to learn, grow, and contribute.
      </p>
      <p className="text-gray-400 mt-4">
        👥 <strong>Connect with the Community:</strong> Forge meaningful
        connections with fellow users. Share your experiences, ask questions,
        and collaborate on projects. This is your space to build a network that
        extends beyond boundaries.
      </p>
      <p className="text-gray-400 mt-4">
        🌟 <strong>Personalized Feed:</strong> Tailor your experience with a
        personalized feed. Discover content and discussions aligned with your
        interests. Our goal is to make every visit to our platform a valuable
        and enjoyable experience for you.
      </p>
      <Button
        className="rounded-full px-6 my-8"
        onClick={() => {
          router.push("/onboard/user-onboard");
        }}
      >
        Continue Learning
      </Button>
    </div>
  );
};
export default NormalUser;
