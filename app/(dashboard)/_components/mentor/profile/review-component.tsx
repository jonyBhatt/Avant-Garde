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
}

const Reviews = ({ reviews }: IReviews) => {
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
          {reviews?.student?.firstName}
        </h2>
        <span className="text-xs font-light text-muted-foreground font-rubik">
          {reviews?.createdAt.toString().slice(0, 10)}
        </span>
      </div>
      <span className="text-sm font-inter ml-4 font-light">
        {reviews?.content}
      </span>
    </div>
  );
};
export default Reviews;
