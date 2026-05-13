import { cn } from "@/lib/utils";

export function SectionContainer({
  id,
  className,
  children
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-20 md:px-8 md:py-28", className)}>
      <div className="mx-auto max-w-[1440px]">{children}</div>
    </section>
  );
}
