"use client";

import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ConsultationPayload = {
  fullName: string;
  email: string;
  phoneNumber: string;
  eventType: "Weddings" | "Corporate Events" | "Social Events" | "Destination Events" | "Other";
  eventDate: string;
  eventLocation: string;
  budgetRange: string;
  message: string;
};

export function Consultation() {
  const container = useRef(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState<ConsultationPayload>({
    fullName: "",
    email: "",
    phoneNumber: "",
    eventType: "Weddings",
    eventDate: "",
    eventLocation: "",
    budgetRange: "",
    message: "",
  });

  const depositAccountNumber = useMemo(() => {
    return process.env.NEXT_PUBLIC_DEPOSIT_ACCOUNT_NUMBER || "0000000000";
  }, []);

  const depositAccountName = useMemo(() => {
    return process.env.NEXT_PUBLIC_DEPOSIT_ACCOUNT_NAME || "The Chimera Company";
  }, []);

  const depositBankName = useMemo(() => {
    return process.env.NEXT_PUBLIC_DEPOSIT_BANK_NAME || "Your Bank";
  }, []);

  const bookingFeeLabel = useMemo(() => {
    return process.env.NEXT_PUBLIC_BOOKING_FEE_LABEL || "";
  }, []);

  const refundPolicy = useMemo(() => {
    return (
      process.env.NEXT_PUBLIC_BOOKING_FEE_REFUND_POLICY ||
      "Booking fees are non-refundable once your date is reserved."
    );
  }, []);

  useGSAP(
    () => {
      gsap.from(".consult-hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".consult-hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".form-field").forEach((field) => {
        gsap.from(field, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: field,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: container },
  );

  const submit = async (payload: ConsultationPayload) => {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { ok: boolean; referenceId?: string; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to submit your request. Please try again.");
      }

      setReferenceId(data.referenceId || null);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(formData);
  };

  return (
    <div ref={container} className="min-h-screen">
      <section className="py-20 lg:py-28 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="consult-hero-title text-5xl lg:text-7xl font-light mb-6 uppercase tracking-tight">
            Consultation
          </h1>
          <p className="consult-hero-subtitle text-xl lg:text-2xl text-foreground/70 leading-relaxed">
            Tell us about your event. We&apos;ll respond with next steps and secure your date.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {status !== "success" ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="form-field">
                <label htmlFor="fullName" className="block text-sm tracking-wider mb-3">
                  FULL NAME*
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="block text-sm tracking-wider mb-3">
                  EMAIL ADDRESS*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-field">
                <label htmlFor="phoneNumber" className="block text-sm tracking-wider mb-3">
                  PHONE NUMBER*
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-field">
                <label htmlFor="eventType" className="block text-sm tracking-wider mb-3">
                  EVENT TYPE*
                </label>
                <select
                  id="eventType"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value as ConsultationPayload["eventType"] })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                >
                  <option>Weddings</option>
                  <option>Corporate Events</option>
                  <option>Social Events</option>
                  <option>Destination Events</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="eventDate" className="block text-sm tracking-wider mb-3">
                  EVENT DATE (IF KNOWN)
                </label>
                <input
                  type="date"
                  id="eventDate"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="form-field">
                <label htmlFor="eventLocation" className="block text-sm tracking-wider mb-3">
                  LOCATION*
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  required
                  value={formData.eventLocation}
                  onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="City / Venue (if known)"
                />
              </div>

              <div className="form-field">
                <label htmlFor="budgetRange" className="block text-sm tracking-wider mb-3">
                  BUDGET RANGE
                </label>
                <input
                  type="text"
                  id="budgetRange"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="Optional"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="block text-sm tracking-wider mb-3">
                  DETAILS*
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="Share your vision, guest count, priorities, and any must-haves."
                />
              </div>

              {status === "error" && (
                <div className="form-field">
                  <p className="text-sm text-red-600">{errorMessage}</p>
                </div>
              )}

              <div className="form-field text-center pt-6">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors disabled:opacity-50"
                >
                  {status === "submitting" ? "Submitting..." : "Book Consultation"}
                </button>
              </div>
            </form>
          ) : (
            <div className="border border-border/60 bg-card p-8">
              <h2 className="text-3xl md:text-4xl mb-4 uppercase tracking-tight">
                Request Received
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Thank you. We&apos;ve received your consultation request{referenceId ? ` (Ref: ${referenceId})` : ""}.
                Our team will reach out shortly to confirm availability.
              </p>

        <div className="pt-6 border-t border-border/60">
          <h3 className="text-lg mb-3 uppercase tracking-wider">Next Steps</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Step 1: We confirm availability. Step 2: You reserve your date with the booking fee.
          </p>

          <div className="border border-border/60 bg-background p-6">
            <div className="flex items-baseline justify-between gap-6">
              <h4 className="text-sm tracking-[0.2em] uppercase">Payment Details</h4>
              {bookingFeeLabel ? (
                <p className="text-sm text-muted-foreground">
                  Booking Fee: <span className="text-foreground">{bookingFeeLabel}</span>
                </p>
              ) : null}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Account Name</p>
                <p className="text-base">{depositAccountName}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Bank</p>
                <p className="text-base">{depositBankName}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Account Number</p>
                <p className="text-2xl tracking-widest font-light">{depositAccountNumber}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/60">
              <h4 className="text-sm tracking-[0.2em] uppercase mb-3">Refund & Policy</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{refundPolicy}</p>
            </div>
          </div>
        </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
