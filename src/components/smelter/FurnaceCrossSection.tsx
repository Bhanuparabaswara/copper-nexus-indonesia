"use client";

import { simplifiedSmeltingReactions } from "@/data/copper-process";

export function FurnaceCrossSection() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-copper/20 bg-[#170a04] p-6">
      <div className="absolute left-1/2 top-12 h-64 w-72 -translate-x-1/2 rounded-b-[42%] rounded-t-lg border border-copper/40 bg-gradient-to-b from-copper/30 via-bronze to-black">
        <div className="absolute left-1/2 top-8 h-28 w-20 -translate-x-1/2 rounded-full bg-gold/30 blur-2xl" />
        <div className="absolute bottom-12 left-10 right-10 h-12 rounded-full bg-copper/50 blur-md" />
        <div className="absolute bottom-6 left-8 right-8 h-8 rounded-full bg-black/50" />
        <span className="absolute left-4 top-10 h-24 w-5 rounded-full bg-electric/40 blur-sm" style={{ animation: "heat 2.8s ease-in-out infinite" }} />
        <span className="absolute right-6 top-20 h-28 w-5 rounded-full bg-gold/40 blur-sm" style={{ animation: "heat 3.2s ease-in-out infinite" }} />
      </div>
      <div className="absolute left-5 top-5 rounded-md border border-copper/25 bg-black/35 px-3 py-2 font-mono text-xs text-cream/70">
        Concentrate + O2-enriched air
      </div>
      <div className="absolute bottom-5 left-5 rounded-md border border-gold/25 bg-gold/10 px-3 py-2 font-mono text-xs text-gold">
        Matte 60-70% Cu
      </div>
      <div className="absolute bottom-5 right-5 rounded-md border border-electric/25 bg-electric/10 px-3 py-2 font-mono text-xs text-electric">
        SO2 to acid plant
      </div>
      <div className="absolute right-5 top-5 hidden max-w-xs space-y-2 md:block">
        {simplifiedSmeltingReactions.map((reaction) => (
          <div key={reaction} className="rounded-md bg-black/28 px-3 py-2 font-mono text-xs text-cream/72">
            {reaction}
          </div>
        ))}
      </div>
    </div>
  );
}
