import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SO2AcidPlantMap } from "./SO2AcidPlantMap";
import { PremiumCard } from "@/components/ui/PremiumCard";

export function ByProductSynergyMap() {
  return (
    <SectionContainer id="acid-synergy">
      <SectionTitle eyebrow="Exclusive process insight" title="SO2 to H2SO4: Critical Minerals Synergy">
        Gas SO2 dari oksidasi sulfida bukan sekadar emisi yang harus dikendalikan. Jika ditangkap dan dikonversi menjadi H2SO4, ia bisa menjadi penghubung strategis antara smelter tembaga dan industri HPAL nikel.
      </SectionTitle>
      <SO2AcidPlantMap />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          ["Pollution control", "SO2 capture mencegah emisi asam dan mengubah beban lingkungan menjadi produk kimia industri."],
          ["HPAL acid demand", "Nickel HPAL membutuhkan H2SO4 dalam jumlah besar untuk leaching laterit."],
          ["Industrial park logic", "Tembaga + nikel + acid plant dapat menjadi integrated critical minerals complex."]
        ].map(([title, detail]) => (
          <PremiumCard key={title} className="p-5">
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-cream/64">{detail}</p>
          </PremiumCard>
        ))}
      </div>
    </SectionContainer>
  );
}
