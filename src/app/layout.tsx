import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import GoBackButton from "@/components/button/back";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watch Anime Free Online - AniHub",
  description: "AniHub is a free anime streaming website where you can watch your favorite anime shows online without any subscription or registration. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <div className=" w-full relative">
          <DotPattern
            className={cn(
              "fixed top-0 left-0 w-full z-[-1]",
              "[mask-image:radial-gradient(white,transparent)]",
            )}
          />
        </div>
      </body>
    </html>
  );
}
