import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { DataBadge } from "@/components/ui/DataBadge";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { ContactCard } from "./ContactCard";

export function AboutCreator() {
  return (
    <SectionContainer id="creator" className="pb-16">
      <PremiumCard glow="gold" className="overflow-hidden p-0">
        <div className="grid gap-0 lg:grid-cols-[.95fr_1.05fr]">
          <div className="ore-texture relative min-h-[540px] overflow-hidden border-b border-copper/20 p-8 lg:border-b-0 lg:border-r">
            <Image
              src="/bhanu-parabaswara-creator.jpeg"
              alt="Bhanu Parabaswara, creator of Copper Nexus Indonesia"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[50%_34%] opacity-86 saturate-[0.9]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/42 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,215,0,.14),transparent_28%),linear-gradient(110deg,rgba(184,115,51,.22),transparent_42%)] mix-blend-screen" />
            <div className="absolute inset-8 rounded-full border border-copper/20" />
            <div className="absolute bottom-8 left-8 right-8">
              <DataBadge>About the Creator</DataBadge>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-6xl">Bhanu Parabaswara</h2>
              <p className="mt-4 font-mono text-sm uppercase tracking-[0.16em] text-copper">
                Metallurgy & Materials Engineering Student
              </p>
              <p className="mt-4 text-cream/70">Digital Metallurgy Education | Critical Minerals | Industrial Technology</p>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-lg leading-8 text-cream/76">
              Copper Nexus Indonesia dibuat sebagai portfolio edukasi metalurgi-material berbasis visual storytelling: menghubungkan riset teknis, pemahaman proses metalurgi, frontend engineering, data storytelling, UI/UX design, dan komunikasi industri.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Metallurgy process understanding",
                "Critical minerals research",
                "Sustainability and energy transition",
                "Copper value chain analysis",
                "Industrial visualization",
                "Interactive educational web design"
              ].map((item) => (
                <div key={item} className="rounded-lg border border-copper/15 bg-black/18 p-4 text-sm text-cream/68">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ContactCard />
            </div>
            <p className="mt-8 border-t border-copper/20 pt-6 font-display text-xl text-gold">
              Built by Bhanu Parabaswara — where metallurgy meets digital storytelling.
            </p>
          </div>
        </div>
      </PremiumCard>
    </SectionContainer>
  );
}
