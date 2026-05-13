"use client";

import { copperProcessStages } from "@/data/copper-process";
import { cn } from "@/lib/utils";

export function ProcessTimeline({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <div className="premium-scrollbar flex gap-3 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible">
      {copperProcessStages.map((stage, index) => (
        <button
          key={stage.id}
          type="button"
          onClick={() => onSelect(stage.id)}
          className={cn(
            "relative min-w-[190px] rounded-lg border p-4 text-left transition md:min-w-0",
            active === stage.id ? "border-gold bg-gold/10 shadow-gold" : "border-copper/20 bg-copper/5 hover:border-copper/60"
          )}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper">Stage {index + 1}</span>
          <span className="mt-2 block text-sm font-semibold text-cream">{stage.title}</span>
        </button>
      ))}
    </div>
  );
}
