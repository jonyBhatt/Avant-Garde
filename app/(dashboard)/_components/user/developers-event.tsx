import Image from "next/image";
import { IoIosVideocam } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";

const DeveloperEvent = () => {
  return (
    <div className="my-4 flex flex-col gap-6 ">
      <div className=" border border-primary p-4 rounded-xl">
        <div className="flex flex-col items-start ">
          <h3 className="font-bold font-rubik">
            AI Safety for Biz: Guide to Responsible Tech Use
          </h3>
          <div className="flex items-center gap-2 my-4">
            <Image
              src="/images/user.jpg"
              alt="user profile"
              width={35}
              height={35}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1 font-inter">
              <p className="text-sm text-muted-foreground font-light">
                Jerome Hardaway
              </p>
              <span className="line-clamp-1 text-muted-foreground font-light text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas repellendus laboriosam necessitatibus quidem maiores
                ratione, fuga excepturi iusto expedita. Ut provident libero
                animi modi, veritatis beatae excepturi aperiam impedit
                recusandae.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-primary">
              <IoIosVideocam size={20} />
              <span className="text-xs font-bold font-inter">Recording</span>
            </div>
            <div className="flex items-center gap-2 text-primary text-xs">
              <RiTeamFill size={20} />
              <span className="text-xs font-bold  font-inter">Recording</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" border border-primary p-4 rounded-xl">
        <div className="flex flex-col items-start ">
          <h3 className="font-bold font-rubik">
            AI Safety for Biz: Guide to Responsible Tech Use
          </h3>
          <div className="flex items-center gap-2 my-4">
            <Image
              src="/images/user.jpg"
              alt="user profile"
              width={35}
              height={35}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1 font-inter">
              <p className="text-sm text-muted-foreground font-light">
                Jerome Hardaway
              </p>
              <span className="line-clamp-1 text-muted-foreground font-light text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas repellendus laboriosam necessitatibus quidem maiores
                ratione, fuga excepturi iusto expedita. Ut provident libero
                animi modi, veritatis beatae excepturi aperiam impedit
                recusandae.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-primary">
              <IoIosVideocam size={20} />
              <span className="text-xs font-bold font-inter">Recording</span>
            </div>
            <div className="flex items-center gap-2 text-primary text-xs">
              <RiTeamFill size={20} />
              <span className="text-xs font-bold  font-inter">Recording</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeveloperEvent;
