import { NextResponse } from "next/server";
import { optimizeFlotation } from "@/lib/calculators/flotation";

export async function POST(request: Request) {
  const input = await request.json();
  return NextResponse.json(optimizeFlotation(input));
}
