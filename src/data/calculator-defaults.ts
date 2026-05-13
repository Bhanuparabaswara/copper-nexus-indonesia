export const anodeSlimeDefaults = {
  cathodeProductionTon: 300000,
  slimeYieldKgPerTon: 2.6,
  auGradePercent: 0.35,
  agGradePercent: 9.5,
  pgmGradePercent: 0.08,
  auPriceUsdOz: 2350,
  agPriceUsdOz: 29,
  pgmPriceUsdOz: 980,
  refineryCapexUsd: 280000000
};

export const gridDemandDefaults = {
  gridKm: 40000,
  tonPerKm: 8.5,
  contingencyFactor: 1.15,
  domesticCapacityTon: 180000
};

export const investmentDefaults = {
  capexUsd: 300000000,
  annualThroughputTon: 300000,
  operatingCostUsd: 95000000,
  byProductValueUsd: 420000000,
  copperRodMarginUsdTon: 185,
  cableMarginUsdTon: 360,
  discountRatePercent: 10
};

export const flashSmeltingDefaults = {
  concentrateGradeCuPercent: 28,
  oxygenEnrichmentPercent: 38,
  furnaceTemperatureC: 1300,
  feedRateTonHour: 210,
  sulfurContentPercent: 30,
  silicaFluxKgTon: 68
};

export const flotationDefaults = {
  oreGradeCuPercent: 0.8,
  p80Micron: 170,
  collectorDosageGTon: 34,
  frotherDosageGTon: 22,
  residenceTimeMin: 26,
  cleanerStages: 3
};
