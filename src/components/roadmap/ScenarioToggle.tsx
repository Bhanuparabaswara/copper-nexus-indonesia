"use client";

import { roadmapScenarios } from "@/data/roadmap";

export function ScenarioToggle({ active, onChange }: { active: string; onChange: (value: string) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {roadmapScenarios.map((scenario) => (
        <button
          key={scenario}
          type="button"
          onClick={() => onChange(scenario)}
          className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${active === scenario ? "border-gold bg-gold/15 text-gold" : "border-copper/20 bg-black/18 text-cream/64 hover:border-copper"}`}
        >
          {scenario}
        </button>
      ))}
    </div>
  );
}
