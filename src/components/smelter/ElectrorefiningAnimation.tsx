export function ElectrorefiningAnimation() {
  return (
    <div className="grid gap-3 rounded-lg border border-copper/20 bg-black/18 p-4">
      <div className="flex items-end justify-between gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex flex-1 flex-col items-center gap-2">
            <div className={index % 2 === 0 ? "h-28 w-full rounded-t bg-copper/70" : "h-24 w-full rounded-t bg-silver/70"} />
            <span className="font-mono text-[10px] uppercase text-cream/50">{index % 2 === 0 ? "Anode" : "Cathode"}</span>
          </div>
        ))}
      </div>
      <p className="text-sm leading-6 text-cream/62">
        Elektrolit H2SO4 + CuSO4 memindahkan Cu dari anode menuju cathode 99.99% Cu. Au, Ag, Pt, Pd, Se, Te, dan Bi tertinggal sebagai anode slime.
      </p>
    </div>
  );
}
