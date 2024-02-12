import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const rubik = Rubik({ subsets: ["latin"], variable: "--rubik" });

export const metadata: Metadata = {
  title: "Avant Garde ",
  description: "This is a website for new to tech people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, rubik.variable)}>
        <ClerkProvider
          appearance={{
            baseTheme: shadesOfPurple,
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-right" reverseOrder={false} />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
