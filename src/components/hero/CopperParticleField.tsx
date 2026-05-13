"use client";

import { useMemo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CopperParticleField() {
  const reduced = useReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        left: `${(index * 19) % 100}%`,
        delay: `${(index * 0.37) % 7}s`,
        duration: `${9 + (index % 8)}s`,
        size: `${2 + (index % 4)}px`,
        x: `${(index % 2 === 0 ? 1 : -1) * (18 + (index % 9) * 4)}px`
      })),
    []
  );

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute bottom-[-5vh] rounded-full bg-copper shadow-[0_0_18px_rgba(255,215,0,.36)]"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animation: `float-particle ${particle.duration} linear infinite`,
            animationDelay: particle.delay,
            "--x": particle.x
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
