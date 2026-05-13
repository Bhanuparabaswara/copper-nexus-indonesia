import { cn } from "@/lib/utils";

export function GlassPanel({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-cream/10 bg-cream/[0.045] p-4 backdrop-blur-2xl ring-1 ring-white/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
