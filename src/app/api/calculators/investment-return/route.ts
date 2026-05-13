import { NextResponse } from "next/server";
import { calculateInvestmentReturn } from "@/lib/calculators/investment";

export async function POST(request: Request) {
  const input = await request.json();
  return NextResponse.json(calculateInvestmentReturn(input));
}
