export type ProcessStage = {
  id: string;
  title: string;
  phase: "mine" | "mineral-processing" | "smelting" | "refining" | "downstream";
  product: string;
  technicalDetail: string;
  parameters: string[];
  challenge: string;
  reaction?: string;
};

export const copperProcessStages: ProcessStage[] = [
  {
    id: "grasberg-ore",
    title: "Grasberg Ore",
    phase: "mine",
    product: "Porphyry Cu-Au ore",
    technicalDetail:
      "Bijih sulfida dari sistem porfiri tembaga-emas world-class di Papua, didominasi chalcopyrite, bornite, dan chalcocite.",
    parameters: ["Cu grade: 0.6-1.0%", "Au: 0.5-1.0 g/t", "Elevasi: 4,000+ mdpl"],
    challenge: "Ore heterogeneity, ground pressure, ventilasi tambang bawah tanah, dan kompleksitas block caving."
  },
  {
    id: "crushing-grinding",
    title: "Crushing & Grinding",
    phase: "mineral-processing",
    product: "Liberated sulfide minerals",
    technicalDetail:
      "Jaw/gyratory crusher, cone crusher, SAG mill, dan ball mill mengecilkan ukuran hingga mineral Cu cukup terliberasi.",
    parameters: ["Target P80: 150-200 micrometer", "SAG + ball mill circuit", "High energy intensity"],
    challenge: "Overgrinding menurunkan selektivitas flotasi, undergrinding menurunkan liberasi mineral Cu."
  },
  {
    id: "flotation",
    title: "Flotation",
    phase: "mineral-processing",
    product: "Copper concentrate",
    technicalDetail:
      "Xanthate collector membuat mineral sulfida Cu hidrofobik, MIBC frother membantu gelembung membawa mineral bernilai.",
    parameters: ["Concentrate: 25-30% Cu", "Recovery: 85-90%", "Cleaner stages: 2-3"],
    challenge: "Menyeimbangkan recovery tinggi dengan kadar konsentrat dan kehilangan Au/Ag di tailing."
  },
  {
    id: "dewatering",
    title: "Concentrate Dewatering",
    phase: "mineral-processing",
    product: "Filter cake concentrate",
    technicalDetail:
      "Thickener dan filter press menurunkan moisture agar konsentrat stabil untuk transportasi ke smelter.",
    parameters: ["Moisture: <10%", "Pipeline + ship logistics", "1.7 Mtpa smelter feed"],
    challenge: "Moisture control, handling stability, dan blending konsentrat sebelum furnace."
  },
  {
    id: "flash-smelting",
    title: "Flash Smelting",
    phase: "smelting",
    product: "Copper matte + slag + SO2",
    technicalDetail:
      "Konsentrat kering bereaksi dengan oxygen-enriched air di Outotec flash smelting furnace.",
    parameters: ["Temperature: 1250-1350 C", "Matte: 60-70% Cu", "SO2 captured for acid plant"],
    challenge: "Thermal balance, slag chemistry, oxygen enrichment, dan off-gas control.",
    reaction: "CuFeS2 + O2 -> Cu2S + FeO + SO2"
  },
  {
    id: "converting",
    title: "Converting",
    phase: "smelting",
    product: "Blister copper",
    technicalDetail:
      "Matte ditiup udara/oksigen untuk mengoksidasi Fe dan S, menghasilkan blister copper.",
    parameters: ["Blister copper: 98-99% Cu", "FeO + SiO2 -> FeSiO3 slag", "SO2 to acid plant"],
    challenge: "Kontrol slag carryover, gas capture, dan sulfur removal.",
    reaction: "Cu2S + O2 -> Cu + SO2"
  },
  {
    id: "anode-furnace",
    title: "Anode Furnace",
    phase: "smelting",
    product: "Copper anode",
    technicalDetail:
      "Fire refining menurunkan oksigen terlarut dan menyiapkan anode untuk electrorefining.",
    parameters: ["Anode: ~99.5% Cu", "Poling: natural gas/LPG", "Casting wheel anode"],
    challenge: "Anode chemistry menentukan efisiensi electrorefining dan kualitas anode slime."
  },
  {
    id: "electrorefining",
    title: "Electrorefining",
    phase: "refining",
    product: "Copper cathode Grade A",
    technicalDetail:
      "Anode impure Cu larut dalam elektrolit H2SO4 + CuSO4; Cu murni mengendap di cathode.",
    parameters: ["Current density: 280-320 A/m2", "Cycle: 7-14 days", "Cathode: 99.99% Cu"],
    challenge: "Impurity control, short circuit prevention, electrolyte circulation, dan slime handling."
  },
  {
    id: "cathode",
    title: "Copper Cathode",
    phase: "refining",
    product: "99.99% Cu LME Grade A",
    technicalDetail:
      "Milestone hilirisasi: Indonesia tidak hanya mengekspor konsentrat, tetapi memproduksi katoda tembaga.",
    parameters: ["Gresik output: ~300,000 t/y", "Grade A quality target", "Feed: 1.7 Mt concentrate/y"],
    challenge: "Katoda adalah milestone. Rod, wire, cable, dan anode slime refinery adalah permainan nilai tambah berikutnya."
  },
  {
    id: "rod-wire-cable",
    title: "Rod, Wire & Cable",
    phase: "downstream",
    product: "Copper rod, wire, electrical cable",
    technicalDetail:
      "Cathode dilebur ulang, dicor menjadi rod 8 mm, ditarik menjadi wire, lalu diproses menjadi kabel listrik.",
    parameters: ["Continuous casting rod", "Wire drawing", "PLN grid, EV, solar, data center"],
    challenge: "Copper rod dan cable manufacturing domestik harus mengejar kebutuhan grid dan elektrifikasi."
  }
];

export const simplifiedSmeltingReactions = [
  "CuFeS2 + O2 -> Cu2S + FeO + SO2",
  "FeO + SiO2 -> FeSiO3 slag",
  "Cu2S + O2 -> Cu + SO2"
];
