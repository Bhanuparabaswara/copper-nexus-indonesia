import { z } from "zod";

export const flashSmeltingInputSchema = z.object({
  concentrateGradeCuPercent: z.number().min(5).max(45),
  oxygenEnrichmentPercent: z.number().min(21).max(80),
  furnaceTemperatureC: z.number().min(1050).max(1500),
  feedRateTonHour: z.number().min(1).max(500),
  sulfurContentPercent: z.number().min(5).max(45),
  silicaFluxKgTon: z.number().min(0).max(180)
});

export type FlashSmeltingInput = z.infer<typeof flashSmeltingInputSchema>;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export function simulateFlashSmelting(input: FlashSmeltingInput) {
  const data = flashSmeltingInputSchema.parse(input);
  const tempScore = 100 - Math.abs(1300 - data.furnaceTemperatureC) * 0.5;
  const oxygenScore = 100 - Math.abs(38 - data.oxygenEnrichmentPercent) * 1.8;
  const fluxScore = 100 - Math.abs(70 - data.silicaFluxKgTon) * 0.9;
  const matteGradePercent = clamp(52 + (data.concentrateGradeCuPercent - 24) * 0.9 + (data.oxygenEnrichmentPercent - 30) * 0.24, 45, 76);
  const so2GenerationTonHour = data.feedRateTonHour * (data.sulfurContentPercent / 100) * 1.92;
  const slagTendency = clamp(52 + Math.abs(70 - data.silicaFluxKgTon) * 0.7 + (data.feedRateTonHour - 180) * 0.04, 10, 100);
  const energyIntensityIndex = clamp(68 + Math.abs(1300 - data.furnaceTemperatureC) * 0.05 + (data.feedRateTonHour > 230 ? 8 : 0), 25, 100);
  const processStabilityScore = clamp((tempScore + oxygenScore + fluxScore) / 3 - (slagTendency > 74 ? 8 : 0), 0, 100);

  const warnings = [
    data.furnaceTemperatureC < 1250 || data.furnaceTemperatureC > 1350 ? "Temperature outside ideal 1250-1350 C window." : "",
    data.oxygenEnrichmentPercent > 48 ? "High oxygen enrichment may increase refractory and off-gas stress." : "",
    slagTendency > 72 ? "Slag tendency elevated; check silica flux and Fe balance." : ""
  ].filter(Boolean);

  return {
    matteGradePercent,
    so2GenerationTonHour,
    slagTendency,
    energyIntensityIndex,
    processStabilityScore,
    warnings
  };
}
