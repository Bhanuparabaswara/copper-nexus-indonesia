export function RiskRadar({ impact }: { impact: number }) {
  return (
    <div className="rounded-lg border border-copper/20 bg-black/18 p-4">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream/50">Influence intensity</p>
      <div className="mt-4 grid place-items-center">
        <div className="relative h-36 w-36 rounded-full border border-copper/25 bg-copper/5">
          <div className="absolute inset-5 rounded-full border border-gold/20" />
          <div className="absolute inset-10 rounded-full border border-electric/20" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
          <div className="absolute bottom-1/2 left-1/2 h-[68px] w-1 origin-bottom -translate-x-1/2 rounded-full bg-gradient-to-t from-copper to-gold" style={{ transform: `translateX(-50%) rotate(${impact * 2.7}deg)` }} />
        </div>
      </div>
    </div>
  );
}
