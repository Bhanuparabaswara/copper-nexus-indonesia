import { z } from "zod";

export const flotationInputSchema = z.object({
  oreGradeCuPercent: z.number().min(0.1).max(3),
  p80Micron: z.number().min(60).max(350),
  collectorDosageGTon: z.number().min(1).max(120),
  frotherDosageGTon: z.number().min(1).max(80),
  residenceTimeMin: z.number().min(5).max(70),
  cleanerStages: z.number().min(1).max(5)
});

export type FlotationInput = z.infer<typeof flotationInputSchema>;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export function optimizeFlotation(input: FlotationInput) {
  const data = flotationInputSchema.parse(input);
  const grindFactor = 1 - Math.abs(data.p80Micron - 170) / 420;
  const collectorFactor = 1 - Math.abs(data.collectorDosageGTon - 34) / 130;
  const frotherFactor = 1 - Math.abs(data.frotherDosageGTon - 22) / 90;
  const timeFactor = Math.min(data.residenceTimeMin / 30, 1.18);
  const baseRecovery = 74 + data.oreGradeCuPercent * 7;
  const recoveryPercent = clamp(baseRecovery + grindFactor * 8 + collectorFactor * 5 + frotherFactor * 3 + timeFactor * 4 - data.cleanerStages * 0.8, 58, 94);
  const concentrateGradePercent = clamp(19 + data.cleanerStages * 2.6 + (170 - Math.abs(data.p80Micron - 170)) * 0.015 - (recoveryPercent - 86) * 0.2, 16, 34);
  const tailingsLossPercent = 100 - recoveryPercent;
  const curve = Array.from({ length: 7 }, (_, index) => {
    const recovery = clamp(recoveryPercent - 9 + index * 3, 50, 95);
    const grade = clamp(concentrateGradePercent + (3 - index) * 1.15, 14, 36);
    return { recovery, grade };
  });

  return {
    recoveryPercent,
    concentrateGradePercent,
    tailingsLossPercent,
    curve
  };
}
