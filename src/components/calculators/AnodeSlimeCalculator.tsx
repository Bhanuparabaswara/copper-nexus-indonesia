"use client";

import { useMemo, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Gem } from "lucide-react";
import { anodeSlimeDefaults } from "@/data/calculator-defaults";
import { calculateAnodeSlime } from "@/lib/calculators/anode-slime";
import { formatNumber, formatUsd } from "@/lib/formatters";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CalculatorField } from "./CalculatorField";

export function AnodeSlimeCalculator() {
  const [input, setInput] = useState(anodeSlimeDefaults);
  const result = useMemo(() => calculateAnodeSlime(input), [input]);
  const chartData = [
    { name: "Au", value: result.auValueUsd, color: "#FFD700" },
    { name: "Ag", value: result.agValueUsd, color: "#C0C0C0" },
    { name: "PGM", value: result.pgmValueUsd, color: "#00BFFF" }
  ];

  const update = (key: keyof typeof input) => (value: number) => setInput((current) => ({ ...current, [key]: value }));

  return (
    <SectionContainer id="anode-slime" className="bg-black/10">
      <SectionTitle eyebrow="Hidden value" title="The Hidden Treasure in Anode Slime">
        Saat Cu larut dan mengendap sebagai cathode, logam yang lebih mulia tidak ikut larut sempurna. Au, Ag, Pt, Pd, Se, Te, dan Bi terkonsentrasi sebagai anode slime: residue kecil dengan nilai strategis besar.
      </SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
        <PremiumCard glow="gold" className="ore-texture">
          <div className="mb-5 flex items-center gap-3">
            <Gem className="h-7 w-7 text-gold" />
            <div>
              <h3 className="font-display text-2xl font-semibold">Anode Slime Calculator</h3>
              <p className="text-sm text-cream/58">Mock assumptions, fully editable.</p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <CalculatorField label="Cathode production" value={input.cathodeProductionTon} min={50000} max={600000} step={10000} suffix="t/y" onChange={update("cathodeProductionTon")} />
            <CalculatorField label="Slime yield" value={input.slimeYieldKgPerTon} min={0.5} max={8} step={0.1} suffix="kg/t" onChange={update("slimeYieldKgPerTon")} />
            <CalculatorField label="Au content" value={input.auGradePercent} min={0.02} max={2} step={0.01} suffix="%" onChange={update("auGradePercent")} />
            <CalculatorField label="Ag content" value={input.agGradePercent} min={1} max={20} step={0.1} suffix="%" onChange={update("agGradePercent")} />
            <CalculatorField label="PGM content" value={input.pgmGradePercent} min={0.01} max={0.5} step={0.01} suffix="%" onChange={update("pgmGradePercent")} />
            <CalculatorField label="Refinery CAPEX" value={input.refineryCapexUsd / 1000000} min={100} max={600} step={10} suffix="M USD" onChange={(value) => update("refineryCapexUsd")(value * 1000000)} />
          </div>
        </PremiumCard>
        <PremiumCard glow="gold">
          <div className="grid gap-4 md:grid-cols-2">
            <Metric label="Anode slime mass" value={`${formatNumber(result.anodeSlimeMassKg / 1000, 1)} t/y`} />
            <Metric label="Annual Au value" value={formatUsd(result.auValueUsd)} />
            <Metric label="Annual Ag value" value={formatUsd(result.agValueUsd)} />
            <Metric label="Annual PGM value" value={formatUsd(result.pgmValueUsd)} />
            <Metric label="Total opportunity" value={formatUsd(result.totalValueUsd)} strong />
            <Metric label="Indicative payback" value={`${formatNumber(result.paybackYears, 1)} years`} strong />
          </div>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} dataKey="value" innerRadius={62} outerRadius={92} paddingAngle={3}>
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatUsd(Number(value))} contentStyle={{ background: "#1C1008", border: "1px solid rgba(184,115,51,.35)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm leading-6 text-cream/54">Disclaimer: hasil adalah estimasi edukatif, bukan model keekonomian industri atau rekomendasi investasi.</p>
        </PremiumCard>
      </div>
    </SectionContainer>
  );
}

function Metric({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="rounded-lg border border-copper/18 bg-black/18 p-4">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream/50">{label}</p>
      <p className={strong ? "mt-2 font-display text-3xl font-semibold text-gold" : "mt-2 font-display text-2xl font-semibold text-cream"}>{value}</p>
    </div>
  );
}
