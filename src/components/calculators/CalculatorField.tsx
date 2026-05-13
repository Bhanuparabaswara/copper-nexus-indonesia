"use client";

export function CalculatorField({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  const inputId = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="grid gap-2 rounded-lg border border-copper/15 bg-black/18 p-3">
      <label htmlFor={inputId} className="flex items-center justify-between gap-3 text-sm text-cream/72">
        {label}
        <span className="font-mono text-copper">
          {value.toLocaleString("id-ID")}
          {suffix ? ` ${suffix}` : ""}
        </span>
      </label>
      <input
        id={inputId}
        aria-label={label}
        className="h-2 accent-copper"
        min={min}
        max={max}
        step={step}
        type="range"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
}
