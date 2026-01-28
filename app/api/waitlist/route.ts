import { NextResponse } from "next/server";

type WaitlistPayload = {
  fullName: string;
  email: string;
  businessName: string;
  serviceCategory: string;
  city: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let payload: WaitlistPayload;

  try {
    payload = (await req.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!payload.fullName?.trim()) {
    return NextResponse.json({ ok: false, error: "Full name is required." }, { status: 400 });
  }
  if (!payload.email?.trim() || !isValidEmail(payload.email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }
  if (!payload.businessName?.trim()) {
    return NextResponse.json({ ok: false, error: "Business name is required." }, { status: 400 });
  }
  if (!payload.serviceCategory?.trim()) {
    return NextResponse.json({ ok: false, error: "Category is required." }, { status: 400 });
  }
  if (!payload.city?.trim()) {
    return NextResponse.json({ ok: false, error: "City is required." }, { status: 400 });
  }

  // MVP: Return success.
  // Production note: persist to database or email tool.
  return NextResponse.json({ ok: true });
}
