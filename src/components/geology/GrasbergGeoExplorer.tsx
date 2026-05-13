"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { OreMineralCards } from "./OreMineralCards";
import { BlockCavingAnimation } from "./BlockCavingAnimation";
import { cn } from "@/lib/utils";

const layers = [
  { name: "Highland cover", grade: "waste / overburden", detail: "Zona permukaan ekstrem pada elevasi 4,000+ mdpl dengan tantangan iklim dan logistik." },
  { name: "Porphyry core", grade: "0.6-1.0% Cu", detail: "Sistem porfiri Cu-Au dengan chalcopyrite, bornite, chalcocite, pyrite, magnetite, silica, dan clay minerals." },
  { name: "Stockwork veins", grade: "Cu-Au enriched", detail: "Jaringan vein sulfida yang mengontrol grade dan distribusi mineralisasi." },
  { name: "Underground cave", grade: "DMLZ + GBC", detail: "Transisi dari open pit ke block cave underground, salah satu proyek pertambangan paling kompleks di dunia." }
];

export function GrasbergGeoExplorer() {
  const [active, setActive] = useState(1);

  return (
    <SectionContainer id="grasberg">
      <SectionTitle eyebrow="Grasberg geology" title="The Copper Mountain Beneath Papua">
        Grasberg adalah porphyry copper-gold deposit kelas dunia. Ceritanya bukan hanya kadar, tetapi skala, elevasi, geometri ore body, dan transisi rekayasa dari open pit menuju underground block caving.
      </SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
        <GlassPanel className="ore-texture p-6">
          <div className="space-y-3">
            {layers.map((layer, index) => (
              <button
                key={layer.name}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "w-full rounded-lg border p-5 text-left transition",
                  active === index ? "border-gold bg-gold/10" : "border-copper/20 bg-black/18 hover:border-copper/60"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-xl font-semibold">{layer.name}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-copper">{layer.grade}</span>
                </div>
                {active === index ? <p className="mt-3 leading-7 text-cream/72">{layer.detail}</p> : null}
              </button>
            ))}
          </div>
        </GlassPanel>
        <div className="grid gap-5">
          <BlockCavingAnimation />
          <GlassPanel>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold">Timeline signal</p>
            <p className="mt-3 leading-7 text-cream/72">
              Dari penemuan awal di pegunungan Papua, operasi modern bergerak ke DMLZ dan Grasberg Block Cave dengan investasi underground multi-miliar dolar, ground pressure ekstrem, subsidence management, dan ventilasi tambang bawah tanah.
            </p>
          </GlassPanel>
        </div>
      </div>
      <div className="mt-8">
        <OreMineralCards />
      </div>
    </SectionContainer>
  );
}
