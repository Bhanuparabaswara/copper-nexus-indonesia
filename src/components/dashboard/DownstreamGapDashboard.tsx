import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { GridCopperDemandEstimator } from "@/components/calculators/GridCopperDemandEstimator";
import { ValueWaterfallChart } from "./ValueWaterfallChart";
import { downstreamGap } from "@/data/copper-demand";

export function DownstreamGapDashboard() {
  return (
    <SectionContainer id="dashboard" className="bg-black/10">
      <SectionTitle eyebrow="Indonesia's missing middle" title="Cathode Is a Milestone. Cable Is the Real Game.">
        Katoda tembaga domestik belum otomatis berarti kontrol value chain. Nilai strategis berikutnya berada di rod, wire drawing, cable manufacturing, PLN grid, EV, solar, dan anode slime refinery.
      </SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <PremiumCard>
          <h3 className="font-display text-2xl font-semibold">Downstream value addition</h3>
          <p className="mt-2 text-sm text-cream/60">Index edukatif: cathode = 100.</p>
          <ValueWaterfallChart />
          <p className="mt-3 text-sm leading-6 text-cream/58">
            Ringkasan chart: value uplift naik tajam setelah cathode memasuki rod, wire, cable, dan anode slime refinery. Readiness domestik justru paling rendah pada stage yang bernilai tinggi.
          </p>
        </PremiumCard>
        <div className="grid gap-4 md:grid-cols-2">
          {downstreamGap.map((stage) => (
            <PremiumCard key={stage.stage} className="p-4" glow={stage.risk === "critical" ? "gold" : "copper"}>
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-display text-xl font-semibold">{stage.stage}</h4>
                <span className="font-mono text-xs uppercase text-copper">{stage.risk}</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-cream/10">
                <div className="h-full rounded-full bg-copper" style={{ width: `${stage.readiness}%` }} />
              </div>
              <p className="mt-2 font-mono text-xs text-cream/52">Indonesia readiness: {stage.readiness}%</p>
            </PremiumCard>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <GridCopperDemandEstimator />
      </div>
    </SectionContainer>
  );
}
