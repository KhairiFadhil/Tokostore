import { signUp } from "@/lib/firebase/service";
import { NextResponse } from "next/server";

export async function POST(request) {
  const req = await request.json();
  console.log(req)
  const res = await signUp(req);
  return NextResponse.json(
    {status: res.status, message: res.message, statusCode: res.statusCode}
  );
}