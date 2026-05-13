"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function BlockCavingAnimation() {
  const reduced = useReducedMotion();

  return (
    <div className="relative h-72 overflow-hidden rounded-lg border border-copper/20 bg-bronze/70">
      <div className="absolute inset-x-10 top-8 h-28 rounded-[50%] border border-copper/30 bg-copper/10" />
      <div className="absolute bottom-0 left-1/2 h-28 w-44 -translate-x-1/2 bg-black/30 [clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)]" />
      {Array.from({ length: 24 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-3 w-3 rounded-sm bg-copper"
          style={{
            left: `${28 + (index % 8) * 6}%`,
            top: `${24 + Math.floor(index / 8) * 8}%`,
            animation: reduced ? undefined : `float-particle ${4 + (index % 5)}s ease-in-out infinite reverse`,
            animationDelay: `${index * 0.13}s`,
            "--x": `${(index % 2 ? 1 : -1) * 10}px`
          } as React.CSSProperties}
        />
      ))}
      <div className="absolute bottom-4 left-4 rounded-md border border-gold/25 bg-black/28 px-3 py-2 font-mono text-xs text-cream/70">
        Block caving: ore body caves under controlled draw.
      </div>
    </div>
  );
}
