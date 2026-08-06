import { NextResponse } from "next/server";

// To handle a POST request to /api
export async function GET(request) {
  return NextResponse.json({ reviews: [] });
}
