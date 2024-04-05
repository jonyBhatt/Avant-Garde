import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversation",
  description: "Become a pro programmer",
};

export default function ChatsLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h2>Conversation Layout</h2>
      {children}
    </section>
  );
}
