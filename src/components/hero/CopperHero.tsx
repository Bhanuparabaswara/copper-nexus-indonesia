"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Cable, Factory, Gem, Mountain } from "lucide-react";
import { CopperParticleField } from "./CopperParticleField";
import { HeroStats } from "./HeroStats";
import { CopperVeinBackdrop } from "./CopperVeinBackdrop";
import { MetallicButton } from "@/components/ui/MetallicButton";
import { DataBadge } from "@/components/ui/DataBadge";

const highlights = [
  { icon: Cable, label: "Metal of electrification" },
  { icon: Mountain, label: "Grasberg world-class Cu-Au deposit" },
  { icon: Factory, label: "Gresik cathode milestone" },
  { icon: Gem, label: "Anode slime hidden value" }
];

export function CopperHero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden px-5 pt-32 md:px-8">
      <CopperParticleField />
      <div className="absolute inset-0 -z-10 bg-copper-radial" />
      <Image
        priority
        src="/hero-ore-field.png"
        alt="Abstract copper ore cross-section with glowing veins"
        fill
        className="-z-10 object-cover opacity-38 mix-blend-screen"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 contour-texture opacity-45" />
      <div className="absolute left-1/2 top-[19%] -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-copper/20 bg-copper/5 blur-3xl" />
      <CopperVeinBackdrop />
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1440px] flex-col justify-end pb-12">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
          <DataBadge>Industrial intelligence platform</DataBadge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.92] text-cream md:text-7xl xl:text-8xl">
            COPPER NEXUS INDONESIA
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl text-copper md:text-3xl">From Papua&apos;s Ore to the World&apos;s Wires</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/78 md:text-xl">
            Every electric grid, every EV motor, every wind turbine runs on copper. Indonesia sits on a mountain of it, but the strategic race begins after cathode.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MetallicButton href="#journey">Explore the Value Chain</MetallicButton>
            <MetallicButton href="#anode-slime" variant="ghost">See Anode Slime</MetallicButton>
            <MetallicButton href="#dashboard" variant="electric">Open Dashboard</MetallicButton>
          </div>
        </motion.div>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.4fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-copper/18 bg-black/18 p-4 backdrop-blur">
                <item.icon className="h-5 w-5 text-gold" />
                <p className="mt-3 text-sm font-semibold text-cream/84">{item.label}</p>
              </div>
            ))}
          </div>
          <HeroStats />
        </div>
        <a href="#why-copper" className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cream/50">
          Scroll investigation <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
