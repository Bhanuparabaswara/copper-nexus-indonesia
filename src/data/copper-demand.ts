export const copperIntensity = [
  { name: "Solar PV", copper: 4.6, unit: "ton Cu/MW", detail: "Kabel DC/AC, inverter, grounding, dan koneksi panel." },
  { name: "Onshore wind", copper: 7.4, unit: "ton Cu/MW", detail: "Generator, transformer, kabel internal, dan grid connection." },
  { name: "Offshore wind", copper: 15.2, unit: "ton Cu/MW", detail: "Subsea export cable, array cable, generator, transformer, dan offshore substation." },
  { name: "EV", copper: 72, unit: "kg Cu/unit", detail: "Motor, inverter, baterai, harness, dan charging loop." },
  { name: "ICE vehicle", copper: 23, unit: "kg Cu/unit", detail: "Baseline kendaraan konvensional untuk pembanding intensitas." },
  { name: "Charging station", copper: 1.2, unit: "kg Cu/charger", detail: "Kabel, konektor, busbar, dan panel listrik." },
  { name: "Grid upgrade", copper: 8.5, unit: "ton Cu/km", detail: "Estimasi edukatif untuk transmisi/distribusi intensif tembaga." },
  { name: "Data center", copper: 27, unit: "ton Cu/MW", detail: "Power distribution, busway, cooling control, dan UPS." }
];

export const downstreamGap = [
  { stage: "Cathode", value: 100, readiness: 78, risk: "medium" },
  { stage: "Rod", value: 118, readiness: 38, risk: "high" },
  { stage: "Wire", value: 136, readiness: 34, risk: "high" },
  { stage: "Cable", value: 172, readiness: 42, risk: "high" },
  { stage: "Grid/EV/Solar", value: 225, readiness: 47, risk: "medium" },
  { stage: "Anode Slime Refinery", value: 260, readiness: 18, risk: "critical" }
];

export const demandScenarios = {
  conservative: { label: "Conservative", tonPerKm: 5.8, contingency: 1.08 },
  base: { label: "Base", tonPerKm: 8.5, contingency: 1.15 },
  aggressive: { label: "Aggressive", tonPerKm: 11.2, contingency: 1.22 }
} as const;
