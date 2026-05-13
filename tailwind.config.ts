import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#1C1008",
        surface: "#241407",
        "surface-elevated": "#311B0A",
        copper: "#B87333",
        bronze: "#2C1A00",
        gold: "#FFD700",
        silver: "#C0C0C0",
        electric: "#00BFFF",
        cream: "#F5E8D0",
        success: "#5BD39B",
        warning: "#F2B84B",
        danger: "#FF6B5E"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        copper: "0 0 60px rgba(184, 115, 51, 0.22)",
        electric: "0 0 54px rgba(0, 191, 255, 0.18)",
        gold: "0 0 48px rgba(255, 215, 0, 0.14)"
      },
      opacity: {
        8: "0.08",
        10: "0.1",
        14: "0.14",
        15: "0.15",
        16: "0.16",
        18: "0.18",
        20: "0.2",
        24: "0.24",
        25: "0.25",
        28: "0.28",
        30: "0.3",
        32: "0.32",
        35: "0.35",
        38: "0.38",
        40: "0.4",
        42: "0.42",
        45: "0.45",
        48: "0.48",
        50: "0.5",
        52: "0.52",
        54: "0.54",
        58: "0.58",
        60: "0.6",
        62: "0.62",
        64: "0.64",
        66: "0.66",
        68: "0.68",
        70: "0.7",
        72: "0.72",
        75: "0.75",
        76: "0.76",
        78: "0.78",
        80: "0.8",
        82: "0.82",
        84: "0.84",
        86: "0.86",
        88: "0.88",
        90: "0.9",
        92: "0.92",
        94: "0.94",
        95: "0.95",
        96: "0.96"
      },
      backgroundImage: {
        "copper-radial": "radial-gradient(circle at 20% 20%, rgba(184,115,51,.28), transparent 34%), radial-gradient(circle at 76% 8%, rgba(0,191,255,.14), transparent 28%), linear-gradient(135deg, #1C1008 0%, #2C1A00 48%, #120904 100%)",
        "metal-line": "linear-gradient(90deg, transparent, rgba(184,115,51,.72), rgba(255,215,0,.28), transparent)"
      }
    }
  },
  plugins: []
};

export default config;
