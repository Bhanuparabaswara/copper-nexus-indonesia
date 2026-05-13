import { ArrowRight, BatteryCharging, Factory, FlaskConical } from "lucide-react";
import { PremiumCard } from "@/components/ui/PremiumCard";

export function SO2AcidPlantMap() {
  const nodes = [
    { icon: Factory, title: "Copper smelter", detail: "Sulfide oxidation produces SO2-rich gas." },
    { icon: FlaskConical, title: "Acid plant", detail: "SO2 captured and converted into H2SO4." },
    { icon: BatteryCharging, title: "Nickel HPAL synergy", detail: "Sulfuric acid can support critical mineral processing." }
  ];

  return (
    <PremiumCard glow="electric" className="p-6">
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {nodes.map((node, index) => (
          <div key={node.title} className="contents">
            <div className="rounded-lg border border-electric/15 bg-electric/5 p-5">
              <node.icon className="h-6 w-6 text-electric" />
              <h4 className="mt-3 font-display text-xl font-semibold">{node.title}</h4>
              <p className="mt-2 text-sm leading-6 text-cream/64">{node.detail}</p>
            </div>
            {index < nodes.length - 1 ? <ArrowRight className="mx-auto hidden h-6 w-6 self-center text-copper md:block" /> : null}
          </div>
        ))}
      </div>
    </PremiumCard>
  );
}
