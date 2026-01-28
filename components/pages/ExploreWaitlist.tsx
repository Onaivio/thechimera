"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useSubmissionsStore } from "@/stores/submissions-store";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type WaitlistPayload = {
  fullName: string;
  email: string;
  businessName: string;
  serviceCategory: string;
  city: string;
};

export function ExploreWaitlist() {
  const container = useRef(null);
  const waitlistJoined = useSubmissionsStore((s) => s.waitlistJoined);
  const setWaitlistJoined = useSubmissionsStore((s) => s.setWaitlistJoined);

  const [formData, setFormData] = useState<WaitlistPayload>({
    fullName: "",
    email: "",
    businessName: "",
    serviceCategory: "",
    city: "",
  });

  useGSAP(
    () => {
      gsap.from(".explore-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".explore-subtitle", {
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

  const waitlistMutation = useMutation({
    mutationFn: async (payload: WaitlistPayload) => {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to join the waitlist.");
      }
      return { ok: true };
    },
    onSuccess: () => {
      setWaitlistJoined(true);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await waitlistMutation.mutateAsync(formData);
  };

  return (
    <div ref={container} className="min-h-screen">
      <section className="pt-20 lg:pt-28 px-6 pb-12 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="explore-title text-5xl lg:text-7xl font-light mb-6 uppercase tracking-tight">
            Explore
          </h1>
          <p className="explore-subtitle text-xl lg:text-2xl text-foreground/70 leading-relaxed">
            MVP II: Vendor onboarding is coming soon. Join the waitlist to be first in line.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/consultation"
              className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {!waitlistJoined ? (
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
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="block text-sm tracking-wider mb-3">
                  EMAIL*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="form-field">
                <label htmlFor="businessName" className="block text-sm tracking-wider mb-3">
                  BUSINESS NAME*
                </label>
                <input
                  type="text"
                  id="businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="form-field">
                <label htmlFor="serviceCategory" className="block text-sm tracking-wider mb-3">
                  CATEGORY*
                </label>
                <input
                  type="text"
                  id="serviceCategory"
                  required
                  value={formData.serviceCategory}
                  onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="Photography, Florals, Catering, Venue, etc."
                />
              </div>

              <div className="form-field">
                <label htmlFor="city" className="block text-sm tracking-wider mb-3">
                  CITY*
                </label>
                <input
                  type="text"
                  id="city"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {waitlistMutation.isError && (
                <div className="form-field">
                  <p className="text-sm text-red-600">
                    {waitlistMutation.error instanceof Error
                      ? waitlistMutation.error.message
                      : "Something went wrong."}
                  </p>
                </div>
              )}

              <div className="form-field text-center pt-6">
                <button
                  type="submit"
                  disabled={waitlistMutation.isPending}
                  className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors disabled:opacity-50"
                >
                  {waitlistMutation.isPending ? "Submitting..." : "Join Waitlist"}
                </button>
              </div>
            </form>
          ) : (
            <div className="border border-border/60 bg-card p-8 text-center">
              <h2 className="text-3xl md:text-4xl mb-4 uppercase tracking-tight">You&apos;re In</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Thanks for joining. We&apos;ll email you when vendor onboarding opens.
              </p>
              <Link
                href="/consultation"
                className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
