"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-black/20" aria-hidden>
      <div className="h-full bg-gradient-to-r from-copper via-gold to-electric" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}
