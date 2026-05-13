import { cn } from "@/lib/utils";

export function DataBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex rounded-full border border-copper/25 bg-copper/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-copper", className)}>
      {children}
    </span>
  );
}
