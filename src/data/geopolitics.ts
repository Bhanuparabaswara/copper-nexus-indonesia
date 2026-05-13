export type Actor = {
  id: string;
  name: string;
  group: string;
  interest: string;
  leverage: string;
  risk: string;
  opportunity: string;
  impact: number;
};

export const geopoliticalActors: Actor[] = [
  {
    id: "indonesia",
    name: "Indonesia",
    group: "sovereign",
    interest: "Mengubah cathode milestone menjadi ekosistem copper downstream penuh.",
    leverage: "Resource ownership, domestic grid demand, dan mandat hilirisasi.",
    risk: "Technology dependency dan gap manufaktur hilir.",
    opportunity: "Critical minerals complex yang menghubungkan tembaga, nikel, dan energi.",
    impact: 96
  },
  {
    id: "ptfi",
    name: "PT Freeport Indonesia",
    group: "operator",
    interest: "Stabilitas operasi Grasberg dan smelter Gresik.",
    leverage: "Operational know-how, ore supply, dan brownfield infrastructure.",
    risk: "Smelter ramp-up, underground complexity, dan compliance.",
    opportunity: "Anchor producer untuk value chain nasional.",
    impact: 88
  },
  {
    id: "usa",
    name: "Freeport-McMoRan / USA",
    group: "geopolitics",
    interest: "Mengamankan copper supply untuk critical minerals diplomacy.",
    leverage: "Technology, capital market, dan operator heritage.",
    risk: "Kompetisi China dan tuntutan local value capture Indonesia.",
    opportunity: "Strategic partnership untuk copper yang kompatibel dengan pasar Barat.",
    impact: 82
  },
  {
    id: "china",
    name: "China Downstream Investors",
    group: "downstream",
    interest: "Masuk ke rod, wire, cable, dan EV supply chain.",
    leverage: "Manufacturing scale, capex speed, dan downstream demand.",
    risk: "Control value capture bergeser dari konsentrat ke produk hilir.",
    opportunity: "Mempercepat industrialisasi jika disertai transfer teknologi nyata.",
    impact: 86
  },
  {
    id: "japan-korea",
    name: "Japan & South Korea",
    group: "buyers",
    interest: "Sumber cathode dan cable supply yang stabil untuk electronics dan EV.",
    leverage: "Refining discipline, offtake, dan industrial partnership.",
    risk: "Ketergantungan pada import supply chain yang makin kompetitif.",
    opportunity: "Partner teknologi untuk refinery by-product dan high-grade materials.",
    impact: 68
  },
  {
    id: "eu",
    name: "EU Critical Minerals Strategy",
    group: "policy",
    interest: "Diversifikasi supply chain mineral strategis dari risiko konsentrasi.",
    leverage: "Market access, financing standards, dan policy signal.",
    risk: "ESG, traceability, dan geopolitical qualification.",
    opportunity: "Premium market untuk copper dengan traceability dan lower-carbon pathway.",
    impact: 61
  },
  {
    id: "pln",
    name: "PLN Domestic Grid Demand",
    group: "demand",
    interest: "40,000 km ekspansi jaringan dan grid upgrade.",
    leverage: "Demand anchor yang bisa menyerap rod, wire, dan cable domestik.",
    risk: "Jika manufaktur kabel tertinggal, cathode lokal tidak otomatis menjadi local value.",
    opportunity: "Industrial offtake untuk membangun middle downstream Indonesia.",
    impact: 90
  }
];

export const geopoliticalLinks = [
  { source: "indonesia", target: "ptfi", strength: 92 },
  { source: "ptfi", target: "usa", strength: 86 },
  { source: "indonesia", target: "china", strength: 76 },
  { source: "indonesia", target: "pln", strength: 94 },
  { source: "indonesia", target: "japan-korea", strength: 58 },
  { source: "indonesia", target: "eu", strength: 48 },
  { source: "china", target: "pln", strength: 62 },
  { source: "usa", target: "eu", strength: 42 }
];
