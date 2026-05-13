"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BatteryCharging, Cable, Car, Database, Sun, Wind } from "lucide-react";
import { copperIntensity } from "@/data/copper-demand";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PremiumCard } from "@/components/ui/PremiumCard";

const icons = [Sun, Wind, Wind, Car, Car, BatteryCharging, Cable, Database];

export function CopperDemandCards() {
  return (
    <SectionContainer id="why-copper">
      <SectionTitle eyebrow="The metal behind electrification" title="Why Copper Matters">
        Solar, wind, EV, charging infrastructure, data center, dan grid upgrade semuanya membutuhkan konduktivitas, ductility, dan reliability tembaga. Inilah sebabnya copper menjadi metal of electrification.
      </SectionTitle>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {copperIntensity.map((item, index) => {
          const Icon = icons[index] ?? Cable;
          return (
            <PremiumCard key={item.name} glow={item.name.includes("Grid") ? "electric" : "copper"} className="min-h-[210px]">
              <Icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-semibold">{item.name}</h3>
              <p className="mt-3 font-mono text-3xl font-semibold text-copper">{item.copper}</p>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cream/50">{item.unit}</p>
              <p className="mt-4 text-sm leading-6 text-cream/62">{item.detail}</p>
            </PremiumCard>
          );
        })}
      </div>
      <PremiumCard className="mt-8" glow="electric">
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={copperIntensity.filter((item) => item.unit.includes("ton"))} layout="vertical">
              <CartesianGrid stroke="rgba(245,232,208,.08)" />
              <XAxis type="number" stroke="rgba(245,232,208,.58)" />
              <YAxis dataKey="name" type="category" stroke="rgba(245,232,208,.58)" width={110} />
              <Tooltip contentStyle={{ background: "#1C1008", border: "1px solid rgba(184,115,51,.35)" }} />
              <Bar dataKey="copper" fill="#B87333" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-sm leading-6 text-cream/58">
          Ringkasan data: offshore wind dan data center memiliki intensitas tembaga tertinggi dalam asumsi edukatif ini, sementara solar PV dan onshore wind tetap menjadi demand driver skala besar karena kapasitas terpasang yang luas.
        </p>
      </PremiumCard>
    </SectionContainer>
  );
}
