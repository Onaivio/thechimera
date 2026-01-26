"use client";
import { useRef } from "react";
import { Heart, Building2, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Tailored celebrations that reflect your love story, your culture, and your vision.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Polished, strategic events that strengthen your brand and engage your audience.",
  },
  {
    icon: Sparkles,
    title: "Social Events",
    description:
      "Elegant gatherings for life's meaningful moments — from milestone birthdays to private soirées.",
  },
];

export function Services() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".section-header-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      })
        .from(
          ".section-header-title",
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".section-header-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".service-card",
          {
            opacity: 0,
            scale: 0.9,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.5"
        );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-16 lg:py-24 bg-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-header-subtitle text-xs lg:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            What we do
          </p>
          <h2 className="section-header-title text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-6">
            WHAT WE DO
          </h2>
          <p className="section-header-description text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We create refined, unforgettable experiences for:
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="service-card text-center group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-6 border-2 border-foreground rounded-full flex items-center justify-center transition-colors group-hover:bg-foreground group-hover:text-background"
              >
                <service.icon className="w-7 h-7" />
              </motion.div>

              {/* Title */}
              <h3
                className="text-xl lg:text-2xl mb-4"
             
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
