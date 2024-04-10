import { ReactNode } from "react";
import { Metadata } from "next";
import ChatSideBar from "../_components/chats/side-bar";
import QueryContextProvider from "@/context/clientProvider/query-provider";

export const metadata: Metadata = {
  title: "Conversation",
  description: "Become a pro programmer",
};

export default function ChatsLayout({ children }: { children: ReactNode }) {
  return (
    <QueryContextProvider>
      <section className="flex flex-col gap-8 h-screen ">
        <div className="w-full  border-r border-gray-300 md:order-first">
          <ChatSideBar />
        </div>
        <main className="flex flex-grow flex-col gap-4">
          <h2 className="font-rubik text-2xl font-bold">Conversation</h2>
          {children}
        </main>
      </section>
    </QueryContextProvider>
  );
}
