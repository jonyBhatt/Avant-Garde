"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminSideBar, mentorSideBar, userSideBar } from "@/constant";
import { cn } from "@/lib/utils";
import style from "./css/layout.module.css";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const SidebarNavigation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pathname = usePathname();

  // console.log(pathname.slice(0, 24));

  return (
    <>
      {pathname.startsWith("/user-dashboard") ? (
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
        </>
      ) : pathname.startsWith("/mentor-dashboard") ? (
        <>
          {mentorSideBar.map((item, index) => (
            <li key={index} className="flex flex-col gap-6">
              <span className="font-rubik font-semibold text-lg px-6">
                {item.title}
              </span>
              {item.list.map((side, i) => (
                <div key={i} className="ml-4  ">
                  {side.subitem ? (
                    <>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          className={cn(
                            style.link_radius,
                            `${
                              pathname === side.url
                                ? `${style.active}`
                                : "text-muted-foreground"
                            } flex items-center text-lg font-inter  px-8 gap-1 hover:${
                              style.active
                            } duration-200 transition-colors   w-full`
                          )}
                        >
                          {side.icon}
                          <span className="hidden md:block">{side.title}</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {/* <DropdownMenuLabel>Profile</DropdownMenuLabel> */}
                          {/* <DropdownMenuSeparator /> */}
                          {side.subitem.map((sub) => (
                            <DropdownMenuItem
                              key={sub.title}
                              className="cursor-pointer"
                            >
                              <Link
                                className={cn(
                                  style.link_radius,
                                  `${
                                    pathname === side.url
                                      ? `${style.active}`
                                      : "text-muted-foreground"
                                  } flex items-center text-lg font-inter  px-8 gap-1 hover:${
                                    style.active
                                  } duration-200 transition-colors   w-full`
                                )}
                                href={`${sub.url}`}
                              >
                                {sub.icon}
                                <span className="hidden md:block">
                                  {sub.title}
                                </span>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              ))}
            </li>
          ))}
        </>
      ) : (
        <>
          {adminSideBar.map((item, index) => (
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
        </>
      )}
      {isClient && (
        <li className="flex items-center px-6">
          <UserButton afterSignOutUrl="/sign-in" showName />
        </li>
      )}
    </>
  );
};
