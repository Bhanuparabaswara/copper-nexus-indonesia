"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { downstreamGap } from "@/data/copper-demand";

export function ValueWaterfallChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={downstreamGap}>
          <CartesianGrid stroke="rgba(245,232,208,.08)" />
          <XAxis dataKey="stage" stroke="rgba(245,232,208,.58)" tick={{ fontSize: 11 }} />
          <YAxis stroke="rgba(245,232,208,.58)" />
          <Tooltip contentStyle={{ background: "#1C1008", border: "1px solid rgba(184,115,51,.35)" }} />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {downstreamGap.map((entry) => (
              <Cell key={entry.stage} fill={entry.risk === "critical" ? "#FFD700" : entry.risk === "high" ? "#B87333" : "#00BFFF"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
