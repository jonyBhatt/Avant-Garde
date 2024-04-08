import { ReactNode } from "react";
import { Metadata } from "next";
import ChatSideBar from "../_components/chats/side-bar";

export const metadata: Metadata = {
  title: "Conversation",
  description: "Become a pro programmer",
};

export default function ChatsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col md:flex-row h-screen ">
      <div className="w-full md:w-64  border-r border-gray-300 md:order-first">
        <ChatSideBar />
      </div>
      <main className="flex flex-grow">{children}</main>
    </section>
  );
}
