"use client";

import { useMemo, useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { DataBadge } from "@/components/ui/DataBadge";
import { geopoliticalActors } from "@/data/geopolitics";
import { ActorNetworkGraph } from "./ActorNetworkGraph";
import { RiskRadar } from "./RiskRadar";

export function GeopoliticalRiskMapper() {
  const [activeId, setActiveId] = useState("indonesia");
  const actor = useMemo(() => geopoliticalActors.find((item) => item.id === activeId) ?? geopoliticalActors[0], [activeId]);

  return (
    <SectionContainer id="geopolitics">
      <SectionTitle eyebrow="Supply chain influence map" title="Who Wants Indonesian Copper?">
        Indonesia is not only producing copper. Indonesia is negotiating its position inside the electrification supply chain.
      </SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <ActorNetworkGraph active={activeId} onSelect={setActiveId} />
        <PremiumCard glow="electric">
          <DataBadge>{actor.group}</DataBadge>
          <h3 className="mt-4 font-display text-3xl font-semibold">{actor.name}</h3>
          <div className="mt-5 grid gap-3">
            <Info label="Interest" value={actor.interest} />
            <Info label="Leverage" value={actor.leverage} />
            <Info label="Risk" value={actor.risk} />
            <Info label="Opportunity" value={actor.opportunity} />
          </div>
          <div className="mt-4">
            <RiskRadar impact={actor.impact} />
          </div>
        </PremiumCard>
      </div>
    </SectionContainer>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-copper/15 bg-black/18 p-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">{label}</p>
      <p className="mt-1 text-sm leading-6 text-cream/70">{value}</p>
    </div>
  );
}
