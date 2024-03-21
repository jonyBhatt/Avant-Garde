import Image from "next/image";

const Reviews = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image
          src={"/images/user.jpg"}
          alt="profile picture"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h2 className="font-semibold font-inter tracking-wide">Name</h2>
        <span className="text-xs font-light text-muted-foreground font-rubik">
          10 May 2023
        </span>
      </div>
      <span className="text-sm font-inter ml-4 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ducimus
        corporis aspernatur quia eius, dolore vitae rerum veniam ut nihil.
        Nesciunt et minus similique amet veniam hic voluptatem ea at!
      </span>
    </div>
  );
};
export default Reviews;
