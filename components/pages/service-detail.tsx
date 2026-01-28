"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import type { ServiceItem } from "@/data/services";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServiceDetail({ service }: { service: ServiceItem }) {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".service-hero-title", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.from(".service-hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".service-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="min-h-screen pt-24">
      {/* Back */}
      <div className="px-6 lg:px-12 py-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors"
        >
          ← Back to Services
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="service-hero-title text-6xl md:text-8xl mb-6 uppercase tracking-tight">
            {service.title}
          </h1>
          <p className="service-hero-subtitle text-xl max-w-2xl mx-auto opacity-90">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="service-section">
              <h2 className="text-3xl md:text-4xl mb-4 uppercase tracking-tight">
                Overview
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {service.overview}
              </p>
            </div>

            <div className="service-section">
              <h2 className="text-3xl md:text-4xl mb-6 uppercase tracking-tight">
                What We Offer
              </h2>
              <ul className="space-y-3 text-base text-muted-foreground leading-relaxed">
                {service.whatWeOffer.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="service-section lg:col-span-1 h-fit lg:sticky lg:top-28 border border-border/60 bg-card p-6">
            <h3 className="text-lg mb-4 uppercase tracking-wider">Ideal For</h3>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border/60">
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Ready to begin? Book a consultation and we&apos;ll map the next steps
                for your event.
              </p>
              <Link
                href="/consultation"
                className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
