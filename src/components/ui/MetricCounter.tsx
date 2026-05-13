"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { formatNumber } from "@/lib/formatters";

type MetricCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  detail?: string;
  maximumFractionDigits?: number;
};

export function MetricCounter({ value, suffix = "", label, detail, maximumFractionDigits = 0 }: MetricCounterProps) {
  const count = useCountUp(value);

  return (
    <div className="rounded-lg border border-copper/20 bg-black/18 p-4">
      <div className="font-mono text-2xl font-semibold text-gold md:text-3xl">
        {formatNumber(count, maximumFractionDigits)}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold text-cream">{label}</div>
      {detail ? <div className="mt-1 text-xs leading-5 text-cream/58">{detail}</div> : null}
    </div>
  );
}
