"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from "../ui/ImageWithFallback";
import Link from "next/link";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesPage() {
  const container = useRef(null);
  
  const services = [
    {
      title: "WEDDINGS",
      description:
        "Tailored celebrations that reflect your love story, your culture, and your vision. From intimate ceremonies to grand destination affairs, we curate every detail to create a day that feels authentically yours.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      link: "/services/weddings",
    },
    {
      title: "CORPORATE EVENTS",
      description:
        "Polished, strategic events that strengthen your brand and engage your audience. Product launches, conferences, executive retreats, and client experiences designed with precision and purpose.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      link: "/services/corporate",
    },
    {
      title: "SOCIAL EVENTS",
      description:
        "Elegant gatherings for life's meaningful moments. Milestone birthdays, anniversaries, private dinners, and intimate soirées crafted with sophistication and care.",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      link: "/services/social",
    },
    {
      title: "DESTINATION MANAGEMENT",
      description:
        "Comprehensive coordination for events in extraordinary locations. Venue selection, vendor curation, guest logistics, and on-site execution anywhere in the world.",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      link: "/services/destination",
    },
    {
      title: "FULL-SERVICE PLANNING",
      description:
        "End-to-end event management from concept to completion. Design, logistics, vendor coordination, timeline management, and flawless day-of execution.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      link: "/services/planning",
    },
    {
      title: "DESIGN & STYLING",
      description:
        "Bespoke aesthetic direction and design services. Color palettes, florals, lighting, décor, and styling that brings your vision to life with intention and elegance.",
      image:
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
      link: "/services/design",
    },
  ];

  useGSAP(() => {
    gsap.from(".services-hero-title", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" });
    gsap.from(".services-hero-subtitle", { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: "power3.out" });

    gsap.utils.toArray<HTMLElement>(".service-card").forEach(card => {
      gsap.from(card, {
        opacity: 0, y: 50, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" }
      });
    });

    gsap.from(".cta-section", {
      opacity: 0, y: 50, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ".cta-section", start: "top 85%", toggleActions: "play none none none" }
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="services-hero-title text-6xl md:text-8xl mb-6">OUR SERVICES</h1>
          <p className="services-hero-subtitle text-xl max-w-2xl mx-auto opacity-90">
            Comprehensive event management solutions tailored to your vision
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="relative aspect-4/3 mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h2 className="text-3xl mb-4">{service.title}</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-block text-sm tracking-wider border-b border-current pb-1 hover:text-accent transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-5xl mb-6">
              READY TO CREATE SOMETHING EXCEPTIONAL?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let&apos;s design an experience your guests will never forget.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-12 py-4 rounded-full hover:bg-primary/90 transition-colors tracking-wider"
              >
                SCHEDULE A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
