import { ReactNode } from "react";
import ChatHeader from "./_components/chat-header";
import Sidebar from "./_components/side-bar";
import QueryContextProvider from "@/context/clientProvider/query-provider";
export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <QueryContextProvider>
      <main className="flex flex-col gap-4  items-start">
        <ChatHeader />
        <div className="grid grid-cols-1 lg:grid-cols-[18rem,1fr] px-4 gap-4 pb-4 w-full">
          <Sidebar />
          <div className="w-full">{children}</div>
        </div>
      </main>
    </QueryContextProvider>
  );
}
