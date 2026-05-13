import type { ProcessStage } from "@/data/copper-process";
import { JourneyStageCard } from "./JourneyStageCard";

export function ProcessDetailPanel({ stage }: { stage: ProcessStage }) {
  return <JourneyStageCard stage={stage} />;
}
