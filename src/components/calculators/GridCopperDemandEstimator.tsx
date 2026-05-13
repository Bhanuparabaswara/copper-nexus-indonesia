"use client";

import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { demandScenarios, downstreamGap } from "@/data/copper-demand";
import { gridDemandDefaults } from "@/data/calculator-defaults";
import { calculateGridDemand } from "@/lib/calculators/grid-demand";
import { formatNumber } from "@/lib/formatters";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { CalculatorField } from "./CalculatorField";

export function GridCopperDemandEstimator() {
  const [input, setInput] = useState(gridDemandDefaults);
  const [scenario, setScenario] = useState<keyof typeof demandScenarios>("base");
  const scenarioConfig = demandScenarios[scenario];
  const calculatedInput = { ...input, tonPerKm: scenarioConfig.tonPerKm, contingencyFactor: scenarioConfig.contingency };
  const result = useMemo(() => calculateGridDemand(calculatedInput), [calculatedInput]);

  return (
    <PremiumCard glow="electric">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-3xl font-semibold">PLN Grid Copper Demand Estimator</h3>
          <p className="mt-2 text-cream/62">Estimasi kebutuhan Cu untuk ekspansi transmisi 40,000 km.</p>
        </div>
        <div className="flex rounded-lg border border-copper/20 bg-black/24 p-1">
          {(Object.keys(demandScenarios) as Array<keyof typeof demandScenarios>).map((key) => (
            <button key={key} type="button" onClick={() => setScenario(key)} className={`rounded-md px-3 py-2 text-xs font-semibold ${scenario === key ? "bg-copper text-black" : "text-cream/62"}`}>
              {demandScenarios[key].label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="grid gap-3">
          <CalculatorField label="Grid length" value={input.gridKm} min={1000} max={60000} step={1000} suffix="km" onChange={(value) => setInput((current) => ({ ...current, gridKm: value }))} />
          <CalculatorField label="Domestic cable capacity" value={input.domesticCapacityTon} min={0} max={500000} step={10000} suffix="t/y" onChange={(value) => setInput((current) => ({ ...current, domesticCapacityTon: value }))} />
          <div className="rounded-lg border border-electric/20 bg-electric/8 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-electric">Demand output</p>
            <p className="mt-3 font-display text-4xl font-semibold text-cream">{formatNumber(result.copperDemandTon)} t Cu</p>
            <p className="mt-2 text-sm text-cream/58">Gap kapasitas: {formatNumber(result.capacityGapTon)} t cathode-equivalent ({formatNumber(result.gapPercent, 1)}%).</p>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={downstreamGap}>
              <CartesianGrid stroke="rgba(245,232,208,.08)" />
              <XAxis dataKey="stage" stroke="rgba(245,232,208,.58)" tick={{ fontSize: 11 }} />
              <YAxis stroke="rgba(245,232,208,.58)" />
              <Tooltip contentStyle={{ background: "#1C1008", border: "1px solid rgba(184,115,51,.35)" }} />
              <Bar dataKey="readiness" fill="#00BFFF" radius={[4, 4, 0, 0]} />
              <Bar dataKey="value" fill="#B87333" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </PremiumCard>
  );
}
