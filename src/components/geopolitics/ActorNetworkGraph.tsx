"use client";

import * as d3 from "d3";
import { geopoliticalActors, geopoliticalLinks } from "@/data/geopolitics";

export function ActorNetworkGraph({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  const radius = 150;
  const angle = d3.scaleLinear().domain([0, geopoliticalActors.length]).range([0, Math.PI * 2]);
  const nodes = geopoliticalActors.map((actor, index) => ({
    ...actor,
    x: 210 + Math.cos(angle(index) - Math.PI / 2) * radius,
    y: 190 + Math.sin(angle(index) - Math.PI / 2) * radius
  }));

  return (
    <svg className="h-[420px] w-full rounded-lg border border-copper/20 bg-black/18" viewBox="0 0 420 380" role="img" aria-label="Network graph of copper geopolitical actors">
      {geopoliticalLinks.map((link) => {
        const source = nodes.find((node) => node.id === link.source)!;
        const target = nodes.find((node) => node.id === link.target)!;
        return <line key={`${link.source}-${link.target}`} x1={source.x} y1={source.y} x2={target.x} y2={target.y} stroke="rgba(184,115,51,.38)" strokeWidth={Math.max(1, link.strength / 32)} />;
      })}
      {nodes.map((node) => (
        <g key={node.id} role="button" tabIndex={0} onClick={() => onSelect(node.id)} onKeyDown={(event) => event.key === "Enter" && onSelect(node.id)} className="cursor-pointer outline-none">
          <circle cx={node.x} cy={node.y} r={active === node.id ? 24 : 18} fill={active === node.id ? "#FFD700" : "#B87333"} opacity={active === node.id ? 0.96 : 0.72} />
          <text x={node.x} y={node.y + 38} textAnchor="middle" fill="#F5E8D0" fontSize="10" fontFamily="IBM Plex Mono">
            {node.name.split(" ")[0]}
          </text>
        </g>
      ))}
    </svg>
  );
}
