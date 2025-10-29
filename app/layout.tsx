// /app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NextMind Inspired",
  description: "AI Agency demo app (inspired UI)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        {/* Fullscreen, looping background video */}
        <video
          className="fixed inset-0 w-full h-full object-cover z-[-2]"
          src="/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Soft overlay to keep text readable */}
        <div className="fixed inset-0 bg-[rgba(10,12,20,0.55)] backdrop-blur-[2px] z-[-1]" />

        <Navbar />
        <main className="container-wide">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
