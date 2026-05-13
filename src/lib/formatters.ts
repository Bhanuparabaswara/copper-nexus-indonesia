export const formatNumber = (value: number, maximumFractionDigits = 0) =>
  new Intl.NumberFormat("id-ID", { maximumFractionDigits }).format(value);

export const formatUsd = (value: number, compact = true) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 2 : 0
  }).format(value);

export const formatPercent = (value: number, maximumFractionDigits = 1) =>
  `${new Intl.NumberFormat("id-ID", { maximumFractionDigits }).format(value)}%`;
