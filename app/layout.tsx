import "./globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aidela Africa — Talent Hub & Hiring Platform",
  description:
    "Connect with vetted, job-ready African tech talent. Hire global-ready developers, marketers and designers with efficient, transparent processes.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <body className="antialiased bg-white text-neutral-900 ">
        <Navbar />
        <main className ='container mx-auto px-4 sm:px-6 lg:px-8'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
