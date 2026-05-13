"use client";

import { useMemo, useState } from "react";
import { investmentDefaults } from "@/data/calculator-defaults";
import { calculateInvestmentReturn } from "@/lib/calculators/investment";
import { formatNumber, formatUsd } from "@/lib/formatters";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { CalculatorField } from "./CalculatorField";

export function InvestmentReturnCalculator() {
  const [input, setInput] = useState(investmentDefaults);
  const result = useMemo(() => calculateInvestmentReturn(input), [input]);

  const updateMillion = (key: keyof typeof input) => (value: number) => setInput((current) => ({ ...current, [key]: value * 1000000 }));
  const update = (key: keyof typeof input) => (value: number) => setInput((current) => ({ ...current, [key]: value }));

  return (
    <PremiumCard glow="gold">
      <h3 className="font-display text-3xl font-semibold">Investment Return Calculator</h3>
      <p className="mt-2 text-sm leading-6 text-cream/62">Executive model untuk melihat payback anode slime refinery dan downstream rod/cable margin.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="grid gap-3">
          <CalculatorField label="CAPEX" value={input.capexUsd / 1000000} min={80} max={800} step={10} suffix="M USD" onChange={updateMillion("capexUsd")} />
          <CalculatorField label="Throughput" value={input.annualThroughputTon} min={50000} max={600000} step={10000} suffix="t/y" onChange={update("annualThroughputTon")} />
          <CalculatorField label="Operating cost" value={input.operatingCostUsd / 1000000} min={20} max={220} step={5} suffix="M USD" onChange={updateMillion("operatingCostUsd")} />
          <CalculatorField label="By-product value" value={input.byProductValueUsd / 1000000} min={50} max={950} step={10} suffix="M USD" onChange={updateMillion("byProductValueUsd")} />
          <CalculatorField label="Rod margin" value={input.copperRodMarginUsdTon} min={0} max={500} step={5} suffix="USD/t" onChange={update("copperRodMarginUsdTon")} />
          <CalculatorField label="Cable margin" value={input.cableMarginUsdTon} min={0} max={900} step={10} suffix="USD/t" onChange={update("cableMarginUsdTon")} />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <Metric label="Annual revenue" value={formatUsd(result.annualRevenueUsd)} />
          <Metric label="Annual cashflow" value={formatUsd(result.annualCashflowUsd)} />
          <Metric label="Discounted cashflow" value={formatUsd(result.discountedCashflowUsd)} />
          <Metric label="ROI" value={`${formatNumber(result.roiPercent, 1)}%`} />
          <div className="md:col-span-2 rounded-lg border border-gold/30 bg-gold/10 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-gold">Indicative payback</p>
            <p className="mt-2 font-display text-5xl font-semibold text-cream">{formatNumber(result.paybackYears, 1)} years</p>
            <p className="mt-3 text-sm leading-6 text-cream/58">Model edukatif. Tambahkan tax, financing, ramp-up curve, metal recovery, working capital, dan tolling contract untuk studi kelayakan nyata.</p>
          </div>
        </div>
      </div>
    </PremiumCard>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-copper/15 bg-black/18 p-4">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream/50">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold text-cream">{value}</p>
    </div>
  );
}
