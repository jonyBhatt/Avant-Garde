import Image from "next/image";

const ChatHead = () => {
  return (
    <div className="bg-muted py-6 px-4 w-full">
      <div className="flex gap-2 items-center">
        <Image
          src={"/images/user.jpg"}
          alt="user"
          width={45}
          height={45}
          className="rounded-full"
        />
        <h3 className="font-inter font-bold">John Doe</h3>
      </div>
    </div>
  );
};
export default ChatHead;
