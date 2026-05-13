import { z } from "zod";

export const investmentInputSchema = z.object({
  capexUsd: z.number().min(1),
  annualThroughputTon: z.number().min(1),
  operatingCostUsd: z.number().min(0),
  byProductValueUsd: z.number().min(0),
  copperRodMarginUsdTon: z.number().min(0),
  cableMarginUsdTon: z.number().min(0),
  discountRatePercent: z.number().min(0)
});

export type InvestmentInput = z.infer<typeof investmentInputSchema>;

export function calculateInvestmentReturn(input: InvestmentInput) {
  const data = investmentInputSchema.parse(input);
  const rodMarginUsd = data.annualThroughputTon * data.copperRodMarginUsdTon;
  const cableMarginUsd = data.annualThroughputTon * data.cableMarginUsdTon;
  const annualRevenueUsd = data.byProductValueUsd + rodMarginUsd + cableMarginUsd;
  const annualCashflowUsd = annualRevenueUsd - data.operatingCostUsd;
  const paybackYears = data.capexUsd / Math.max(annualCashflowUsd, 1);
  const roiPercent = (annualCashflowUsd / data.capexUsd) * 100;
  const discountedCashflowUsd = annualCashflowUsd / (1 + data.discountRatePercent / 100);

  return {
    rodMarginUsd,
    cableMarginUsd,
    annualRevenueUsd,
    annualCashflowUsd,
    discountedCashflowUsd,
    paybackYears,
    roiPercent
  };
}
