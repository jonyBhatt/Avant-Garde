import { cn } from "@/lib/utils";
import Image from "next/image";

interface IReviews {
  reviews?: {
    id: string;
    rating: number;
    content: string;
    createdAt: Date;
    student?: {
      id: string;
      photo: string | null;
      firstName: string | null;
    };
  };
  className?: string;
}

const Reviews = ({ reviews, className }: IReviews) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image
          src={reviews?.student?.photo || "/images/user.jpg"}
          alt="profile picture"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h2 className="font-semibold font-inter tracking-wide">
          {reviews?.student?.firstName || "John Doe"}
        </h2>
        <span className="text-xs font-light text-muted-foreground font-rubik">
          {reviews?.createdAt.toString().slice(0, 10) || "10 May 2023"}
        </span>
      </div>
      <span
        className={cn(
          className,
          "text-sm font-inter ml-4 font-light leading-6"
        )}
      >
        {reviews?.content ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus, mollitia enim incidunt laborum recusandae maiores. In eligendi minima nulla officia nemo similique numquam praesentium porro ipsam nobis. Sunt, odio."}
      </span>
    </div>
  );
};
export default Reviews;
