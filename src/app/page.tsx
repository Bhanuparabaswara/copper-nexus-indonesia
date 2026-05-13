import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CopperHero } from "@/components/hero/CopperHero";
import { CopperDemandCards } from "@/components/dashboard/CopperDemandCards";
import { CopperAtomJourney } from "@/components/storytelling/CopperAtomJourney";
import { GrasbergGeoExplorer } from "@/components/geology/GrasbergGeoExplorer";
import { FlashSmeltingVisualizer } from "@/components/smelter/FlashSmeltingVisualizer";
import { ByProductSynergyMap } from "@/components/smelter/ByProductSynergyMap";
import { AnodeSlimeCalculator } from "@/components/calculators/AnodeSlimeCalculator";
import { DownstreamGapDashboard } from "@/components/dashboard/DownstreamGapDashboard";
import { CopperValueChainBuilder } from "@/components/dashboard/CopperValueChainBuilder";
import { GeopoliticalRiskMapper } from "@/components/geopolitics/GeopoliticalRiskMapper";
import { TechnicalSimulatorSuite } from "@/components/dashboard/TechnicalSimulatorSuite";
import { FutureCopperRoadmap } from "@/components/roadmap/FutureCopperRoadmap";
import { CircularCopperEconomy } from "@/components/sustainability/CircularCopperEconomy";
import { AboutCreator } from "@/components/creator/AboutCreator";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { CopperCrystalLazy } from "@/components/hero/CopperCrystalLazy";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <CopperHero />
        <CopperDemandCards />
        <SectionContainer id="crystal" className="pt-0">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <CopperCrystalLazy />
            <PremiumCard>
              <SectionTitle eyebrow="Crystal signal" title="Copper at Atomic Scale">
                Tembaga bernilai karena perilaku materialnya: konduktivitas listrik tinggi, mudah dibentuk menjadi wire, dan dapat didaur ulang berulang kali. Visual ringan ini menjadi jembatan antara atomic structure dan sistem elektrifikasi.
              </SectionTitle>
            </PremiumCard>
          </div>
        </SectionContainer>
        <CopperAtomJourney />
        <GrasbergGeoExplorer />
        <FlashSmeltingVisualizer />
        <ByProductSynergyMap />
        <AnodeSlimeCalculator />
        <DownstreamGapDashboard />
        <CopperValueChainBuilder />
        <GeopoliticalRiskMapper />
        <TechnicalSimulatorSuite />
        <FutureCopperRoadmap />
        <CircularCopperEconomy />
        <AboutCreator />
      </main>
      <Footer />
    </>
  );
}
