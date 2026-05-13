"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

const navItems = [
  ["Matter", "#why-copper"],
  ["Journey", "#journey"],
  ["Smelter", "#gresik"],
  ["Slime", "#anode-slime"],
  ["Dashboard", "#dashboard"],
  ["Geopolitics", "#geopolitics"],
  ["Creator", "#creator"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-1 z-50 border-b border-copper/10 bg-background/72 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
          <Link href="#top" className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-cream">
            Copper <span className="text-copper">Nexus</span>
          </Link>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="font-mono text-xs uppercase tracking-[0.16em] text-cream/62 transition hover:text-gold">
                {label}
              </Link>
            ))}
          </div>
          <button
            aria-label="Open mobile navigation"
            className="rounded-md border border-copper/25 p-2 text-cream lg:hidden"
            onClick={() => setOpen(true)}
            type="button"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>
      <MobileNav items={navItems} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
