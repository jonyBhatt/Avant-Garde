import React, { ReactNode } from "react";
import { Sidebar } from "./_components/Sidebar";
import { getChatUser } from "@/lib/actions/chat/get-chat-current-user";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { currentUserPrisma } = await getChatUser();
  if (currentUserPrisma.role !== "ADMIN") {
    return redirect("/");
  }
  return (
    <div className="flex bg-[#161616]">
      <Sidebar user={currentUserPrisma} />
      <div className="flex-1 h-svh overflow-y-auto  p-6">{children}</div>
    </div>
  );
}
