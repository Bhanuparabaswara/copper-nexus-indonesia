"use client";

import { useMemo, useState } from "react";
import { flashSmeltingDefaults } from "@/data/calculator-defaults";
import { simulateFlashSmelting } from "@/lib/calculators/flash-smelting";
import { formatNumber } from "@/lib/formatters";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { CalculatorField } from "./CalculatorField";

export function FlashSmeltingSimulator() {
  const [input, setInput] = useState(flashSmeltingDefaults);
  const result = useMemo(() => simulateFlashSmelting(input), [input]);
  const update = (key: keyof typeof input) => (value: number) => setInput((current) => ({ ...current, [key]: value }));

  return (
    <PremiumCard>
      <h3 className="font-display text-3xl font-semibold">Flash Smelting Simulator</h3>
      <p className="mt-2 text-sm leading-6 text-cream/62">Model edukatif untuk melihat sensitivitas suhu, oxygen enrichment, sulfur, dan silica flux terhadap matte grade, SO2, slag tendency, dan stability.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="grid gap-3">
          <CalculatorField label="Concentrate Cu grade" value={input.concentrateGradeCuPercent} min={15} max={38} step={0.5} suffix="%" onChange={update("concentrateGradeCuPercent")} />
          <CalculatorField label="Oxygen enrichment" value={input.oxygenEnrichmentPercent} min={21} max={60} step={1} suffix="%" onChange={update("oxygenEnrichmentPercent")} />
          <CalculatorField label="Furnace temperature" value={input.furnaceTemperatureC} min={1150} max={1450} step={10} suffix="C" onChange={update("furnaceTemperatureC")} />
          <CalculatorField label="Feed rate" value={input.feedRateTonHour} min={80} max={320} step={5} suffix="t/h" onChange={update("feedRateTonHour")} />
          <CalculatorField label="Sulfur content" value={input.sulfurContentPercent} min={12} max={40} step={0.5} suffix="%" onChange={update("sulfurContentPercent")} />
          <CalculatorField label="Silica flux" value={input.silicaFluxKgTon} min={20} max={120} step={2} suffix="kg/t" onChange={update("silicaFluxKgTon")} />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <Gauge label="Matte grade" value={result.matteGradePercent} suffix="%" color="text-gold" />
          <Gauge label="SO2 generation" value={result.so2GenerationTonHour} suffix="t/h" color="text-electric" />
          <Gauge label="Slag tendency" value={result.slagTendency} suffix="/100" color="text-warning" />
          <Gauge label="Stability score" value={result.processStabilityScore} suffix="/100" color="text-success" />
          <div className="md:col-span-2 rounded-lg border border-warning/25 bg-warning/10 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-warning">Process notes</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-cream/66">
              {(result.warnings.length ? result.warnings : ["Parameters sit inside the simplified ideal operating window."]).map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PremiumCard>
  );
}

function Gauge({ label, value, suffix, color }: { label: string; value: number; suffix: string; color: string }) {
  return (
    <div className="rounded-lg border border-copper/15 bg-black/18 p-4">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream/50">{label}</p>
      <p className={`mt-2 font-display text-3xl font-semibold ${color}`}>{formatNumber(value, 1)}{suffix}</p>
      <div className="mt-3 h-2 rounded-full bg-cream/10">
        <div className="h-full rounded-full bg-copper" style={{ width: `${Math.min(value, 100)}%` }} />
      </div>
    </div>
  );
}
