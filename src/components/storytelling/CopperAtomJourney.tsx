"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Atom } from "lucide-react";
import { copperProcessStages } from "@/data/copper-process";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { JourneyStageCard } from "./JourneyStageCard";
import { ProcessTimeline } from "./ProcessTimeline";

export function CopperAtomJourney() {
  const [activeId, setActiveId] = useState(copperProcessStages[0].id);
  const active = useMemo(() => copperProcessStages.find((stage) => stage.id === activeId) ?? copperProcessStages[0], [activeId]);
  const activeIndex = copperProcessStages.findIndex((stage) => stage.id === activeId);

  return (
    <SectionContainer id="journey" className="bg-black/10">
      <SectionTitle eyebrow="Mine-to-wire storytelling" title="From Ore Body to Copper Cathode">
        Ikuti satu atom Cu dari mineral chalcopyrite di Grasberg, masuk ke flotation, flash smelting, electrorefining, lalu menjadi rod, wire, dan kabel elektrifikasi.
      </SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
        <PremiumCard className="min-h-[520px]">
          <div className="relative mb-8 h-32 overflow-hidden rounded-lg border border-copper/20 bg-bronze/60">
            <div className="absolute left-6 right-6 top-1/2 h-px bg-gradient-to-r from-copper via-gold to-electric" />
            <motion.div
              className="absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-background text-gold shadow-gold"
              animate={{ left: `${Math.min(92, 4 + activeIndex * 9.6)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <Atom className="h-6 w-6" />
            </motion.div>
          </div>
          <ProcessTimeline active={activeId} onSelect={setActiveId} />
        </PremiumCard>
        <JourneyStageCard stage={active} />
      </div>
      <p className="mt-6 text-center text-sm text-cream/52">Parameter proses adalah model edukatif berbasis blueprint dan literatur teknis umum, bukan operating data rahasia.</p>
    </SectionContainer>
  );
}
