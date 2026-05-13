import { DataBadge } from "./DataBadge";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function SectionTitle({ eyebrow, title, children }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <DataBadge>{eyebrow}</DataBadge>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-cream md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-cream/72 md:text-lg">{children}</p>
    </div>
  );
}
