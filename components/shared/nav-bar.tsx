import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, auth } from "@clerk/nextjs";

const Navbar = () => {
  const { userId }: { userId: string | null } = auth();
  return (
    <nav className="p-4 container">
      <div className="flex justify-between items-center gap-8">
        <div className="logo">
          <Image src="/svg/logo.svg" alt="logo" width={50} height={50} />
        </div>
        <div className="navbar-menu hidden md:block bg-transparent ring-1 ring-secondary shadow-sm shadow-primary rounded-full px-8 py-1.5">
          <ul className="flex justify-between items-center gap-8">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <div className="bg-purple-gradient  hidden md:flex rounded-full  items-center inset-2   shadow-[inset_5px_5px_10px_rgba(0,0,0,0.6)] gap-4 py-1.5 px-5">
            <Link href="/sign-in">Login</Link>
            <div className="border border-primary h-4 "></div>
            <Link href="/sign-up">Register</Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
};
export default Navbar;

/**
 *
 *
 */
