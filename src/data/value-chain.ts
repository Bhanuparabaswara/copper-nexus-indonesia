export const valueChainStages = [
  { id: "mine", label: "Mine", product: "Cu-Au ore", uplift: 1, complexity: 88, dependency: 64, readiness: 82, capex: 95, importance: 95 },
  { id: "milling", label: "Milling", product: "Liberated ore", uplift: 1.15, complexity: 80, dependency: 58, readiness: 78, capex: 82, importance: 86 },
  { id: "flotation", label: "Flotation", product: "25-30% Cu concentrate", uplift: 1.7, complexity: 84, dependency: 62, readiness: 80, capex: 78, importance: 90 },
  { id: "smelting", label: "Smelting", product: "60-70% Cu matte", uplift: 2.4, complexity: 92, dependency: 82, readiness: 65, capex: 93, importance: 94 },
  { id: "anode", label: "Anode", product: "~99.5% Cu anode", uplift: 2.7, complexity: 86, dependency: 76, readiness: 62, capex: 88, importance: 88 },
  { id: "cathode", label: "Cathode", product: "99.99% Cu", uplift: 3.1, complexity: 88, dependency: 72, readiness: 70, capex: 90, importance: 93 },
  { id: "rod", label: "Rod", product: "8 mm copper rod", uplift: 3.55, complexity: 70, dependency: 70, readiness: 38, capex: 74, importance: 86 },
  { id: "wire", label: "Wire", product: "Drawn copper wire", uplift: 4.05, complexity: 66, dependency: 64, readiness: 34, capex: 66, importance: 82 },
  { id: "cable", label: "Cable", product: "Electrical cable", uplift: 5.1, complexity: 72, dependency: 58, readiness: 42, capex: 70, importance: 92 },
  { id: "grid", label: "Grid/EV/Solar", product: "Electrification systems", uplift: 6.2, complexity: 78, dependency: 55, readiness: 47, capex: 84, importance: 96 },
  { id: "slime", label: "Anode Slime Refinery", product: "Au, Ag, PGM, Se, Te", uplift: 7.4, complexity: 94, dependency: 88, readiness: 18, capex: 86, importance: 98 }
];
