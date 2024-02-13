import { ReactNode } from "react";
import style from "./_components/css/layout.module.css";
import Sidebar from "./_components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Become a pro programmer",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className={style.body}>
      <Sidebar />
      {children}
    </section>
  );
}
