import { NextResponse } from "next/server";
import send from "@/app/api/send-mail/send"; // To handle a POST request to /api

// To handle a POST request to /api
export async function POST(request) {
  const body = await request?.json();
  const { success, message } = await send(body);
  return NextResponse.json({ success, message });
}
