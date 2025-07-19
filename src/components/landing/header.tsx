"use client";

import Link from "next/link";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#features" className="text-foreground/70 transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="/pricing" className="text-foreground/70 transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="/about" className="text-foreground/70 transition-colors hover:text-foreground">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
