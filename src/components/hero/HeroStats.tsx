import { MetricCounter } from "@/components/ui/MetricCounter";

export function HeroStats() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCounter value={300000} suffix=" t/y" label="Gresik cathode capacity" detail="Target edukatif kapasitas katoda tembaga tahunan." />
      <MetricCounter value={40000} suffix=" km" label="PLN grid expansion" detail="Demand engine untuk rod, wire, dan cable domestik." />
      <MetricCounter value={15} label="Value chain stages" detail="Dari ore body hingga grid, EV, solar, dan by-product." />
      <MetricCounter value={99.99} suffix="%" label="Grade A cathode purity" detail="Format fixed, tidak lagi tampil sebagai .9,999%." maximumFractionDigits={2} />
    </div>
  );
}
