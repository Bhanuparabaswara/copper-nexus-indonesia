import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coppernexus.id"),
  title: "Copper Nexus Indonesia — From Papua's Ore to the World's Wires",
  description:
    "Interactive educational platform exploring Indonesia's copper value chain, Grasberg mining, Gresik smelter technology, anode slime opportunity, downstream gap, and copper geopolitics.",
  keywords: [
    "Indonesia copper",
    "Grasberg",
    "Freeport Indonesia",
    "copper smelter",
    "Gresik smelter",
    "anode slime",
    "copper cathode",
    "copper downstream",
    "metallurgy",
    "critical minerals",
    "electrification metals",
    "copper value chain"
  ],
  openGraph: {
    title: "Copper Nexus Indonesia",
    description: "From Papua's Ore to the World's Wires: an interactive industrial intelligence platform for Indonesian copper.",
    url: "https://coppernexus.id",
    siteName: "Copper Nexus Indonesia",
    images: [
      {
        url: "/og-copper-nexus.png",
        width: 1200,
        height: 630,
        alt: "Copper Nexus Indonesia preview"
      }
    ],
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Copper Nexus Indonesia",
    description: "Interactive copper value chain, smelter, anode slime, and geopolitics platform."
  },
  alternates: {
    canonical: "https://coppernexus.id"
  },
  authors: [{ name: "Bhanu Parabaswara", url: "https://www.linkedin.com/in/bhanuparabaswara" }],
  creator: "Bhanu Parabaswara",
  category: "education",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Copper Nexus Indonesia",
    description:
      "Interactive educational platform exploring Indonesia's copper value chain, Grasberg mining, Gresik smelter technology, anode slime opportunity, downstream gap, and copper geopolitics.",
    provider: {
      "@type": "Person",
      name: "Bhanu Parabaswara",
      email: "parabaswarabhanu@gmail.com",
      sameAs: ["https://www.linkedin.com/in/bhanuparabaswara", "https://www.instagram.com/bhanuparabaswara_"]
    },
    educationalLevel: "Higher education",
    teaches: ["Metallurgy", "Copper value chain", "Critical minerals", "Industrial technology"]
  };

  return (
    <html lang="id">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
