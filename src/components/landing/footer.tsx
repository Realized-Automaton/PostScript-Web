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
            <Link href="/pricing" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Pricing</Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
