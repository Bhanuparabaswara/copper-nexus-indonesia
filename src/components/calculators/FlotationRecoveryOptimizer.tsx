"use client";

import { useMemo, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { flotationDefaults } from "@/data/calculator-defaults";
import { optimizeFlotation } from "@/lib/calculators/flotation";
import { formatNumber } from "@/lib/formatters";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { CalculatorField } from "./CalculatorField";

export function FlotationRecoveryOptimizer() {
  const [input, setInput] = useState(flotationDefaults);
  const result = useMemo(() => optimizeFlotation(input), [input]);
  const update = (key: keyof typeof input) => (value: number) => setInput((current) => ({ ...current, [key]: value }));

  return (
    <PremiumCard glow="electric">
      <h3 className="font-display text-3xl font-semibold">Flotation Recovery Optimizer</h3>
      <p className="mt-2 text-sm leading-6 text-cream/62">Trade-off sederhana antara grind size, collector, frother, residence time, cleaner stage, recovery, dan concentrate grade.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="grid gap-3">
          <CalculatorField label="Ore grade Cu" value={input.oreGradeCuPercent} min={0.2} max={1.6} step={0.05} suffix="%" onChange={update("oreGradeCuPercent")} />
          <CalculatorField label="Grind size P80" value={input.p80Micron} min={80} max={300} step={5} suffix="micron" onChange={update("p80Micron")} />
          <CalculatorField label="Collector dosage" value={input.collectorDosageGTon} min={5} max={80} step={1} suffix="g/t" onChange={update("collectorDosageGTon")} />
          <CalculatorField label="Frother dosage" value={input.frotherDosageGTon} min={5} max={55} step={1} suffix="g/t" onChange={update("frotherDosageGTon")} />
          <CalculatorField label="Residence time" value={input.residenceTimeMin} min={8} max={55} step={1} suffix="min" onChange={update("residenceTimeMin")} />
          <CalculatorField label="Cleaner stages" value={input.cleanerStages} min={1} max={5} step={1} onChange={update("cleanerStages")} />
        </div>
        <div>
          <div className="grid gap-3 md:grid-cols-3">
            <MiniMetric label="Recovery" value={`${formatNumber(result.recoveryPercent, 1)}%`} />
            <MiniMetric label="Concentrate" value={`${formatNumber(result.concentrateGradePercent, 1)}% Cu`} />
            <MiniMetric label="Tailings loss" value={`${formatNumber(result.tailingsLossPercent, 1)}%`} />
          </div>
          <div className="mt-5 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={result.curve}>
                <CartesianGrid stroke="rgba(245,232,208,.08)" />
                <XAxis dataKey="recovery" stroke="rgba(245,232,208,.58)" label={{ value: "Recovery %", position: "insideBottom", offset: -4 }} />
                <YAxis stroke="rgba(245,232,208,.58)" label={{ value: "Grade % Cu", angle: -90, position: "insideLeft" }} />
                <Tooltip contentStyle={{ background: "#1C1008", border: "1px solid rgba(184,115,51,.35)" }} />
                <Line type="monotone" dataKey="grade" stroke="#FFD700" strokeWidth={3} dot={{ fill: "#B87333" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </PremiumCard>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-copper/15 bg-black/18 p-4">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream/50">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold text-gold">{value}</p>
    </div>
  );
}
