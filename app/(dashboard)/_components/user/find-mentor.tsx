import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { FaStar } from "react-icons/fa";
const FindMentor = () => {
  return (
    <div className="mr-4 mt-6 border border-muted-foreground min-w-[350px] rounded-sm shadow-sm shadow-primary">
      <div className="p-4 border-b border-b-muted flex justify-end items-center gap-2 text-muted-foreground text-sm">
        <GoLinkExternal size={18} />
        <span className="text-sm">Search for mentor</span>
      </div>
      <div className="p-4 flex flex-col items-start gap-5 max-h-52 overflow-hidden overflow-y-scroll custom-scrollbar">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/user.jpg"
            alt="user picture"
            width={35}
            height={35}
            className="rounded-full"
          />
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-bold">Anton Anderson</h3>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">
                  899 reviews
                </span>
                <FaStar size={20} color="yellow" />
              </div>
            </div>
            <span className="line-clamp-1 text-muted-foreground text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              maxime qui assumenda nihil obcaecati earum veritatis in ab libero
              aut tempore voluptatum, pariatur iusto neque totam repellendus ex
              excepturi nostrum!
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Image
            src="/images/user.jpg"
            alt="user picture"
            width={35}
            height={35}
            className="rounded-full"
          />
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-bold">Anton Anderson</h3>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">
                  899 reviews
                </span>
                <FaStar size={20} color="yellow" />
              </div>
            </div>
            <span className="line-clamp-1 text-muted-foreground text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              maxime qui assumenda nihil obcaecati earum veritatis in ab libero
              aut tempore voluptatum, pariatur iusto neque totam repellendus ex
              excepturi nostrum!
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Image
            src="/images/user.jpg"
            alt="user picture"
            width={35}
            height={35}
            className="rounded-full"
          />
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-bold">Anton Anderson</h3>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">
                  899 reviews
                </span>
                <FaStar size={20} color="yellow" />
              </div>
            </div>
            <span className="line-clamp-1 text-muted-foreground text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              maxime qui assumenda nihil obcaecati earum veritatis in ab libero
              aut tempore voluptatum, pariatur iusto neque totam repellendus ex
              excepturi nostrum!
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Image
            src="/images/user.jpg"
            alt="user picture"
            width={35}
            height={35}
            className="rounded-full"
          />
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-bold">Anton Anderson</h3>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">
                  899 reviews
                </span>
                <FaStar size={20} color="yellow" />
              </div>
            </div>
            <span className="line-clamp-1 text-muted-foreground text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              maxime qui assumenda nihil obcaecati earum veritatis in ab libero
              aut tempore voluptatum, pariatur iusto neque totam repellendus ex
              excepturi nostrum!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindMentor;
