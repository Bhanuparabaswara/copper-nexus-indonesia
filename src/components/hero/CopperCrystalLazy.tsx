"use client";

import dynamic from "next/dynamic";

export const CopperCrystalLazy = dynamic(() => import("./CopperCrystalScene").then((mod) => mod.CopperCrystalScene), {
  ssr: false,
  loading: () => <div className="h-72 rounded-lg border border-copper/20 bg-black/20" />
});
