import Link from "next/link";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} PostScript AI. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/#features" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Features</Link>
            <Link href="/pricing" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/about" className="text-sm text-foreground/60 hover:text-foreground transition-colors">About Us</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
