import { z } from "zod";

export const gridDemandInputSchema = z.object({
  gridKm: z.number().min(1),
  tonPerKm: z.number().min(0.01),
  contingencyFactor: z.number().min(1),
  domesticCapacityTon: z.number().min(0)
});

export type GridDemandInput = z.infer<typeof gridDemandInputSchema>;

export function calculateGridDemand(input: GridDemandInput) {
  const data = gridDemandInputSchema.parse(input);
  const copperDemandTon = data.gridKm * data.tonPerKm * data.contingencyFactor;
  const equivalentCathodeTon = copperDemandTon * 1.025;
  const capacityGapTon = Math.max(equivalentCathodeTon - data.domesticCapacityTon, 0);
  const gapPercent = data.domesticCapacityTon === 0 ? 100 : (capacityGapTon / equivalentCathodeTon) * 100;

  return {
    copperDemandTon,
    equivalentCathodeTon,
    capacityGapTon,
    gapPercent,
    investmentSignal: capacityGapTon > 150000 ? "urgent" : capacityGapTon > 50000 ? "material" : "manageable"
  };
}
