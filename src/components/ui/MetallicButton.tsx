import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MetallicButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "electric";
  className?: string;
};

export function MetallicButton({ href, children, variant = "primary", className }: MetallicButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-copper/70 focus:ring-offset-2 focus:ring-offset-background",
    variant === "primary" && "bg-copper text-[#140B05] shadow-copper hover:bg-gold",
    variant === "ghost" && "border border-copper/35 bg-copper/5 text-cream hover:border-copper hover:bg-copper/15",
    variant === "electric" && "border border-electric/45 bg-electric/10 text-cream shadow-electric hover:bg-electric/20",
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
        <ArrowRight aria-hidden className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
      <ArrowRight aria-hidden className="h-4 w-4" />
    </button>
  );
}
