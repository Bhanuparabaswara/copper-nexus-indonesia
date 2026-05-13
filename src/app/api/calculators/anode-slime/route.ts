import { NextResponse } from "next/server";
import { calculateAnodeSlime } from "@/lib/calculators/anode-slime";

export async function POST(request: Request) {
  const input = await request.json();
  return NextResponse.json(calculateAnodeSlime(input));
}
