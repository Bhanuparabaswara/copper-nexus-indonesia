import { Gem, Layers, Mountain } from "lucide-react";
import { PremiumCard } from "@/components/ui/PremiumCard";

const minerals = [
  { icon: Gem, name: "Chalcopyrite", formula: "CuFeS2", detail: "Mineral tembaga utama pada banyak sistem porfiri." },
  { icon: Mountain, name: "Bornite", formula: "Cu5FeS4", detail: "Kadar Cu lebih tinggi, sering memberi warna iridescent." },
  { icon: Layers, name: "Chalcocite", formula: "Cu2S", detail: "Sulfida tembaga kaya yang dapat muncul pada zona enrichment." }
];

export function OreMineralCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {minerals.map((item) => (
        <PremiumCard key={item.name} glow="gold" className="p-4">
          <item.icon className="h-5 w-5 text-gold" />
          <h4 className="mt-3 font-display text-xl font-semibold">{item.name}</h4>
          <p className="font-mono text-sm text-copper">{item.formula}</p>
          <p className="mt-3 text-sm leading-6 text-cream/64">{item.detail}</p>
        </PremiumCard>
      ))}
    </div>
  );
}
