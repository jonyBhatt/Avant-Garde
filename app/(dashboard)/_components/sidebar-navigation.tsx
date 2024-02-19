"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userSideBar } from "@/constant";
import { cn } from "@/lib/utils";
import style from "./css/layout.module.css";
import { UserButton } from "@clerk/nextjs";

export const SidebarNavigation = () => {
  const pathname = usePathname();
  return (
    <>
      {userSideBar.map((item, index) => (
        <li key={index} className="flex flex-col gap-6">
          <span className="font-rubik font-semibold text-lg px-6">
            {item.title}
          </span>
          {item.list.map((side, i) => (
            <div key={i} className="ml-4  ">
              <Link
                href={`${side.url}`}
                className={cn(
                  style.link_radius,
                  `${
                    pathname === side.url
                      ? `${style.active}`
                      : "text-muted-foreground"
                  } flex items-center text-lg font-inter py-4 px-8 gap-1 hover:${
                    style.active
                  } duration-200 transition-colors   w-full`
                )}
              >
                {side.icon}
                <span className="hidden md:block">{side.title}</span>
              </Link>
            </div>
          ))}
        </li>
      ))}
      <li className="flex justify-center items-center gap-2">
        <UserButton afterSignOutUrl="/" showName />
      </li>
    </>
  );
};
