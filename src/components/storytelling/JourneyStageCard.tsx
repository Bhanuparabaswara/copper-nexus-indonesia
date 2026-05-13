import type { ProcessStage } from "@/data/copper-process";
import { DataBadge } from "@/components/ui/DataBadge";

export function JourneyStageCard({ stage }: { stage: ProcessStage }) {
  return (
    <article className="rounded-lg border border-copper/20 bg-black/18 p-5">
      <DataBadge>{stage.phase}</DataBadge>
      <h3 className="mt-4 font-display text-2xl font-semibold text-cream">{stage.title}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-copper">{stage.product}</p>
      <p className="mt-4 leading-7 text-cream/72">{stage.technicalDetail}</p>
      {stage.reaction ? <p className="mt-4 rounded-md bg-copper/10 p-3 font-mono text-sm text-gold">{stage.reaction}</p> : null}
      <div className="mt-4 grid gap-2">
        {stage.parameters.map((parameter) => (
          <div key={parameter} className="rounded-md border border-cream/10 px-3 py-2 font-mono text-xs text-cream/72">
            {parameter}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-cream/58">
        <span className="font-semibold text-warning">Challenge:</span> {stage.challenge}
      </p>
    </article>
  );
}
