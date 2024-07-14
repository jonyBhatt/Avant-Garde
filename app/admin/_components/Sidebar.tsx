"use client";

import { useState } from "react";
import {
  FaBox,
  FaCog,
  FaFirstOrder,
  FaHome,
  FaReadme,
  FaUser,
} from "react-icons/fa";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoReport } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "@prisma/client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuLinks = [
  {
    label: "Home",
    icon: <FaHome className="text-muted-foreground group-hover:text-white" />,
    href: "/",
  },
  {
    label: "Dashboard",
    icon: (
      <LuLayoutDashboard className="text-muted-foreground group-hover:text-white" />
    ),
    href: "/admin",
  },
  {
    label: "Users",
    icon: <FaUser className="text-muted-foreground group-hover:text-white" />,
    href: "/admin/users",
  },
  {
    label: "Job",
    icon: (
      <SiMarketo className="text-muted-foreground group-hover:text-white" />
    ),
    href: "/admin/job",
  },
  {
    label: "Products",
    icon: <FaBox className="text-muted-foreground group-hover:text-white" />,
    href: "/admin/products",
  },
  {
    label: "Orders",
    icon: (
      <FaFirstOrder className="text-muted-foreground group-hover:text-white" />
    ),
    href: "/admin/orders",
  },
  {
    label: "Reports",
    icon: <GoReport className="text-muted-foreground group-hover:text-white" />,
    href: "/admin/reports",
  },
];

export const Sidebar = ({ user }: { user: User }) => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  return (
    <aside
      className={` bg-[#1C1C1C] p-4 transition-width duration-300 border-r border-r-[#242424] ${
        collapsed ? "w-24" : "w-64"
      }`}
    >
      <div className="relative flex flex-col">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-muted-foreground  absolute top-10 rounded-full w-8 h-8 z-20  flex items-center justify-center -right-8 border border-[#202020] bg-[#1C1C1C] transition-all duration-300 hover:text-white hover:scale-110"
        >
          {collapsed ? (
            <MdOutlineKeyboardDoubleArrowRight />
          ) : (
            <MdOutlineKeyboardDoubleArrowLeft />
          )}
        </button>
        <div className="flex flex-col space-y-8">
          <div className="py-4 flex  items-start gap-2">
            <Avatar>
              <AvatarImage src={user.photo!} />
              <AvatarFallback>{user.firstName.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className=" flex-col items-start hidden md:flex">
              {!collapsed && (
                <>
                  <h4 className="font-rubik font-bold text-xl ">
                    {user.firstName}
                  </h4>
                  <span className="text-muted-foreground text-sm font-inter">
                    {user.role}
                  </span>
                </>
              )}
            </div>
          </div>
          {menuLinks.map(({ label, icon, href }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-2 py-2 px-4 rounded-xl hover:bg-[#242424] group  transition-all duration-300 ${
                pathname === href ? "bg-[#242424] text-white" : ""
              }`}
            >
              {icon}
              {!collapsed && (
                <span
                  className={`text-muted-foreground group-hover:text-white transition-all duration-300  ${
                    pathname === href ? " text-white" : ""
                  }`}
                >
                  {label}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
