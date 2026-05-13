import { NextResponse } from "next/server";
import { calculateGridDemand } from "@/lib/calculators/grid-demand";

export async function POST(request: Request) {
  const input = await request.json();
  return NextResponse.json(calculateGridDemand(input));
}
