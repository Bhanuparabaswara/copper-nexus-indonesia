import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    source: "mock-adapter",
    symbol: "LME-Cu",
    priceUsdTon: 9650,
    updatedAt: new Date().toISOString(),
    note: "Mock adapter for portfolio use. Replace with a licensed metals price provider for production."
  });
}
