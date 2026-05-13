"use client";

import { useMemo } from "react";
import { valueChainStages } from "@/data/value-chain";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { cn } from "@/lib/utils";
import { useCopperNexusStore } from "@/lib/copper-store";

export function CopperValueChainBuilder() {
  const selected = useCopperNexusStore((state) => state.selectedValueStages);
  const toggle = useCopperNexusStore((state) => state.toggleValueStage);
  const score = useMemo(() => Math.round((selected.reduce((sum, id) => sum + (valueChainStages.find((stage) => stage.id === id)?.importance ?? 0), 0) / valueChainStages.reduce((sum, stage) => sum + stage.importance, 0)) * 100), [selected]);

  return (
    <SectionContainer id="value-chain">
      <SectionTitle eyebrow="Interactive value chain builder" title="Build the Value Chain">
        Aktifkan stage untuk melihat bagaimana value capture Indonesia berubah dari mine, milling, flotation, smelting, cathode, hingga rod, wire, cable, grid, dan anode slime refinery.
      </SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {valueChainStages.map((stage) => {
            const active = selected.includes(stage.id);
            return (
              <button key={stage.id} type="button" onClick={() => toggle(stage.id)} className={cn("rounded-lg border p-4 text-left transition", active ? "border-gold bg-gold/10 shadow-gold" : "border-copper/20 bg-black/18 hover:border-copper/60")}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{stage.label}</h3>
                  <span className="font-mono text-xs text-copper">{stage.uplift.toFixed(1)}x</span>
                </div>
                <p className="mt-2 text-sm text-cream/60">{stage.product}</p>
                <div className="mt-4 grid gap-2 text-xs">
                  <Bar label="Readiness" value={stage.readiness} />
                  <Bar label="Dependency risk" value={stage.dependency} />
                </div>
              </button>
            );
          })}
        </div>
        <PremiumCard glow="gold" className="h-fit">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">Indonesia value capture score</p>
          <p className="mt-3 font-display text-7xl font-semibold text-gold">{score}%</p>
          <p className="mt-4 leading-7 text-cream/68">
            Score naik jika Indonesia menguasai middle downstream dan by-product refinery. Stage yang paling membuka nilai strategis: rod, cable, anode slime refinery, dan circular copper.
          </p>
          <div className="mt-5 rounded-lg border border-warning/25 bg-warning/10 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-warning">Missing downstream alert</p>
            <p className="mt-2 text-sm leading-6 text-cream/64">
              Jika rantai berhenti di cathode, Indonesia masih rentan menjadi supplier material intermediate untuk value chain yang dikendalikan manufaktur luar.
            </p>
          </div>
        </PremiumCard>
      </div>
    </SectionContainer>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-cream/50">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="mt-1 h-1.5 rounded-full bg-cream/10">
        <div className="h-full rounded-full bg-copper" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
