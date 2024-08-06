import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://abeltony.vercel.app/"),
  title: "Farhan Yusof",
  description: "Developer Portfolio By Farhan Yusof",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Farhan Yusof"],
  openGraph: {
    title: "Farhan Yusof",
    description: "Software Engineer",
    images: "/OpenGraph.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
