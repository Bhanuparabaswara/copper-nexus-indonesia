import { NextResponse } from "next/server";
import { simulateFlashSmelting } from "@/lib/calculators/flash-smelting";

export async function POST(request: Request) {
  const input = await request.json();
  return NextResponse.json(simulateFlashSmelting(input));
}
