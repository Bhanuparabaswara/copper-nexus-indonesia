import { cn } from "@/lib/utils";

type PremiumCardProps = React.HTMLAttributes<HTMLDivElement> & {
  glow?: "copper" | "gold" | "electric" | "none";
};

export function PremiumCard({ className, glow = "copper", children, ...props }: PremiumCardProps) {
  const glowClass = {
    copper: "hover:shadow-copper",
    gold: "hover:shadow-gold",
    electric: "hover:shadow-electric",
    none: ""
  }[glow];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-copper/20 bg-surface/72 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300",
        "before:absolute before:inset-0 before:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.09),transparent)] before:translate-x-[-140%] before:transition before:duration-700 hover:before:translate-x-[140%]",
        glowClass,
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
