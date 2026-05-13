import { z } from "zod";

export const anodeSlimeInputSchema = z.object({
  cathodeProductionTon: z.number().min(1),
  slimeYieldKgPerTon: z.number().min(0.01),
  auGradePercent: z.number().min(0),
  agGradePercent: z.number().min(0),
  pgmGradePercent: z.number().min(0),
  auPriceUsdOz: z.number().min(1),
  agPriceUsdOz: z.number().min(1),
  pgmPriceUsdOz: z.number().min(1),
  refineryCapexUsd: z.number().min(1)
});

export type AnodeSlimeInput = z.infer<typeof anodeSlimeInputSchema>;

export function calculateAnodeSlime(input: AnodeSlimeInput) {
  const data = anodeSlimeInputSchema.parse(input);
  const anodeSlimeMassKg = data.cathodeProductionTon * data.slimeYieldKgPerTon;
  const containedAuOz = (anodeSlimeMassKg * (data.auGradePercent / 100)) / 31.1035;
  const containedAgOz = (anodeSlimeMassKg * (data.agGradePercent / 100)) / 31.1035;
  const containedPgmOz = (anodeSlimeMassKg * (data.pgmGradePercent / 100)) / 31.1035;
  const auValueUsd = containedAuOz * data.auPriceUsdOz;
  const agValueUsd = containedAgOz * data.agPriceUsdOz;
  const pgmValueUsd = containedPgmOz * data.pgmPriceUsdOz;
  const totalValueUsd = auValueUsd + agValueUsd + pgmValueUsd;
  const paybackYears = data.refineryCapexUsd / Math.max(totalValueUsd * 0.42, 1);

  return {
    anodeSlimeMassKg,
    containedAuOz,
    containedAgOz,
    containedPgmOz,
    auValueUsd,
    agValueUsd,
    pgmValueUsd,
    totalValueUsd,
    paybackYears
  };
}
