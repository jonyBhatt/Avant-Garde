import { ReactNode } from "react";
import style from "./_components/css/layout.module.css";
import Sidebar from "./_components/sidebar";
import { Metadata } from "next";
import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Become a pro programmer",
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { currentUserPrisma } = await getChatUser();
  return (
    <section className={style.body}>
      <Sidebar />
      {children}
    </section>
  );
}
