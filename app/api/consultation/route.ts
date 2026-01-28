import { NextResponse } from "next/server";

type ConsultationPayload = {
  fullName: string;
  email: string;
  phoneNumber: string;
  eventType: string;
  eventDate?: string;
  eventLocation: string;
  budgetRange?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let payload: ConsultationPayload;

  try {
    payload = (await req.json()) as ConsultationPayload;
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
  if (!payload.phoneNumber?.trim()) {
    return NextResponse.json({ ok: false, error: "Phone number is required." }, { status: 400 });
  }
  if (!payload.eventLocation?.trim()) {
    return NextResponse.json({ ok: false, error: "Event location is required." }, { status: 400 });
  }
  if (!payload.message?.trim()) {
    return NextResponse.json({ ok: false, error: "Details are required." }, { status: 400 });
  }

  // MVP: Return success + referenceId.
  // Production note: wire this up to an email provider/CRM (Resend, SES, HubSpot, etc.)
  // and persist to a database.
  const referenceId = `TCC-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json({ ok: true, referenceId });
}
