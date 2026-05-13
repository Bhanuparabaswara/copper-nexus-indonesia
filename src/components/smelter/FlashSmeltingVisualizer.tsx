import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataBadge } from "@/components/ui/DataBadge";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { FurnaceCrossSection } from "./FurnaceCrossSection";
import { ElectrorefiningAnimation } from "./ElectrorefiningAnimation";
import { SO2AcidPlantMap } from "./SO2AcidPlantMap";

export function FlashSmeltingVisualizer() {
  return (
    <SectionContainer id="gresik" className="bg-black/10">
      <SectionTitle eyebrow="Gresik smelter technology" title="The Smelter Is Not the Finish Line">
        Smelter PTFI Gresik adalah milestone hilirisasi: 1.7 juta ton konsentrat per tahun dapat menjadi sekitar 300,000 ton katoda tembaga Grade A. Tetapi setelah cathode, value chain masih panjang.
      </SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
        <FurnaceCrossSection />
        <div className="grid gap-4">
          {[
            ["Flash smelting", "Concentrate + oxygen-enriched air pada 1250-1350 C menghasilkan matte, slag, dan SO2."],
            ["Converting", "Matte 60-70% Cu ditiup menjadi blister copper 98-99% Cu."],
            ["Anode furnace", "Blister copper di-fire refining dan dicor menjadi anode sekitar 99.5% Cu."],
            ["Electrorefining", "Anode dimurnikan menjadi cathode 99.99% Cu dengan H2SO4 + CuSO4."]
          ].map(([title, detail]) => (
            <GlassPanel key={title}>
              <DataBadge>{title}</DataBadge>
              <p className="mt-3 leading-7 text-cream/72">{detail}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <ElectrorefiningAnimation />
        <SO2AcidPlantMap />
      </div>
      <p className="mt-6 text-center text-sm text-cream/52">Reaksi disederhanakan untuk edukasi visual.</p>
    </SectionContainer>
  );
}
