import { HeaderMenu } from "@/components/headerMenu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderCard from "@/components/headerCard";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Ahad Ali | Personal website",
  description: "Personal website that demonstrate Ali's work!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-5xl m-auto box-border p-3">
            <div className="flex md:justify-evenly md:flex-row-reverse flex-col">
              <HeaderMenu />
              <HeaderCard />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
