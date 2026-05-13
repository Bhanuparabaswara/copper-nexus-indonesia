"use client";

import { roadmap } from "@/data/roadmap";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { ScenarioToggle } from "./ScenarioToggle";
import { useCopperNexusStore } from "@/lib/copper-store";

export function FutureCopperRoadmap() {
  const scenario = useCopperNexusStore((state) => state.roadmapScenario);
  const setScenario = useCopperNexusStore((state) => state.setRoadmapScenario);

  return (
    <SectionContainer id="roadmap" className="bg-black/10">
      <SectionTitle eyebrow="Five-year strategic pathway" title="The Future of Indonesian Copper">
        Roadmap ini menempatkan cathode sebagai fondasi, bukan garis akhir. Pertanyaan besarnya: apakah Indonesia berhenti di katoda, atau membangun full copper ecosystem?
      </SectionTitle>
      <ScenarioToggle active={scenario} onChange={setScenario} />
      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        {roadmap.map((item, index) => (
          <PremiumCard key={item.year} glow={index >= 3 ? "gold" : "copper"} className="p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">{item.year}</p>
            <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-cream/64">{item.detail}</p>
            <div className="mt-4 rounded-md border border-warning/20 bg-warning/10 p-3 text-xs leading-5 text-cream/62">
              Risk: {item.risk}
            </div>
            <div className="mt-2 rounded-md border border-success/20 bg-success/10 p-3 text-xs leading-5 text-cream/62">
              Opportunity: {item.opportunity}
            </div>
          </PremiumCard>
        ))}
      </div>
      <p className="mt-6 text-center font-mono text-xs uppercase tracking-[0.16em] text-gold">Active scenario: {scenario}</p>
    </SectionContainer>
  );
}
