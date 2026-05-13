import { RefreshCcw } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PremiumCard } from "@/components/ui/PremiumCard";

export function CircularCopperEconomy() {
  return (
    <SectionContainer id="circular">
      <SectionTitle eyebrow="Sustainability intelligence" title="Circular Copper Economy">
        Tembaga dapat didaur ulang berulang kali tanpa kehilangan fungsi konduktivitasnya. Copper scrap dari kabel, elektronik, konstruksi, EV, dan renewable infrastructure adalah tambang kota yang belum tergarap kuat.
      </SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <PremiumCard glow="electric" className="grid place-items-center p-10">
          <div className="relative h-72 w-72 rounded-full border border-electric/30 bg-electric/5">
            <RefreshCcw className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-electric" />
            {["Scrap cable", "Sorting", "Refining", "Rod", "Wire"].map((item, index) => (
              <span key={item} className="absolute rounded-full border border-copper/25 bg-background px-3 py-2 text-xs text-cream/72" style={{ left: `${42 + Math.cos((index / 5) * Math.PI * 2 - Math.PI / 2) * 42}%`, top: `${42 + Math.sin((index / 5) * Math.PI * 2 - Math.PI / 2) * 42}%` }}>
                {item}
              </span>
            ))}
          </div>
        </PremiumCard>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Lower footprint", "Recycled copper dapat memiliki jejak karbon jauh lebih rendah dibanding primary copper."],
            ["Urban mine", "Scrap cable, electronics, construction waste, dan EV components menjadi feed material baru."],
            ["Policy gap", "Indonesia memerlukan scrap collection, sorting, refining, dan quality certification."],
            ["Strategic fit", "Circular copper memperkuat supply domestik ketika demand grid dan EV meningkat."]
          ].map(([title, detail]) => (
            <PremiumCard key={title} className="p-5">
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/64">{detail}</p>
            </PremiumCard>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
