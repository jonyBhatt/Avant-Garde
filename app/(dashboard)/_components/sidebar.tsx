"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import style from "./css/layout.module.css";
import { SidebarNavigation } from "./sidebar-navigation";
const Sidebar = () => {
  return (
    <aside className={cn(style.sidebar, "bg-secondary h-full")}>
      <div className="py-4 px-6 ">
        <Image src="/logo/logo.png" alt="logo" width={35} height={35} />
      </div>
      <ul className="grid gap-8 py-8">
        <SidebarNavigation />
      </ul>
    </aside>
  );
};
export default Sidebar;
