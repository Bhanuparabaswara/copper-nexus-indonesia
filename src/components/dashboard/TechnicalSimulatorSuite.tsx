import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FlashSmeltingSimulator } from "@/components/calculators/FlashSmeltingSimulator";
import { FlotationRecoveryOptimizer } from "@/components/calculators/FlotationRecoveryOptimizer";
import { InvestmentReturnCalculator } from "@/components/calculators/InvestmentReturnCalculator";

export function TechnicalSimulatorSuite() {
  return (
    <SectionContainer id="simulators">
      <SectionTitle eyebrow="Educational simulators" title="Process and Investment Intelligence">
        Tiga simulator ini bukan model operasi industri, tetapi alat belajar untuk membaca trade-off metalurgi: furnace stability, grade-recovery, dan ekonomi by-product/downstream.
      </SectionTitle>
      <div className="grid gap-8">
        <FlashSmeltingSimulator />
        <FlotationRecoveryOptimizer />
        <InvestmentReturnCalculator />
      </div>
    </SectionContainer>
  );
}
