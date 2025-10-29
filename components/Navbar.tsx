// /components/Navbar.tsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl">
          Next<span className="text-primary">Mind</span>
        </Link>

        {/* Navigation stripped clean */}
        <nav className="hidden md:flex items-center gap-2" />

        {/* Right actions: Connect Now (LinkedIn) */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/rutvik-savaliya5/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Connect Now
          </a>
        </div>
      </div>
    </header>
  );
}
