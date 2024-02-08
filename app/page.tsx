import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/nav-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
