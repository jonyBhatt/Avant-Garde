import Image from "next/image";
import Link from "next/link";

const ChatSideBar = () => {
  return (
    <aside className="w-full  ">
      <div className="flex flex-col gap-4 items-start">
        <Link
          href={"#"}
          className="flex justify-between w-full cursor-pointer transition-all duration-100 hover:bg-muted px-4 py-6  rounded-bl-xl [&:not(:first-child)]:rounded-tl-xl"
        >
          <div className="flex gap-2">
            <Image
              src={"/images/user.jpg"}
              alt="user profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="font-inter font-bold">John Doe</h2>
              <span className="text-muted-foreground font-inter text-sm">
                Message
              </span>
            </div>
          </div>
          <span className="text-muted-foreground font-inter text-sm">time</span>
        </Link>
        <Link
          href={"#"}
          className="flex justify-between w-full cursor-pointer transition-all duration-100 hover:bg-muted px-4 py-6  rounded-bl-xl [&:not(:first-child)]:rounded-tl-xl"
        >
          <div className="flex gap-2">
            <Image
              src={"/images/user.jpg"}
              alt="user profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="font-inter font-bold">John Doe</h2>
              <span className="text-muted-foreground font-inter text-sm">
                Message
              </span>
            </div>
          </div>
          <span className="text-muted-foreground font-inter text-sm">time</span>
        </Link>
      </div>
    </aside>
  );
};
export default ChatSideBar;
