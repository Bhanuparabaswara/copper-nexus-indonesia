"use client";

import Link from "next/link";
import { X } from "lucide-react";

export function MobileNav({
  items,
  open,
  onClose
}: {
  items: string[][];
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-background/95 p-5 backdrop-blur-2xl lg:hidden">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm uppercase tracking-[0.22em] text-copper">Navigation</span>
        <button aria-label="Close navigation" className="rounded-md border border-copper/30 p-2" onClick={onClose} type="button">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-10 grid gap-3">
        {items.map(([label, href]) => (
          <Link key={href} href={href} onClick={onClose} className="rounded-lg border border-copper/15 bg-copper/5 px-4 py-4 font-display text-2xl text-cream">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
