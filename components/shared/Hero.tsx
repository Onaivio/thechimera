"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import AnimatedHeroImage from "./AnimatedHeroImage";
import Link from "next/link";
import TextAppearAnimation from "../animation/TextAppearAnimation";
import RevealWrapper from "../animation/RevealWrapper";

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 50,
            duration: 1.5,
          },
          "-=0.8",
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=1",
        )
        .from(
          ".hero-button",
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          "-=0.8",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="min-h-screen pt-32 lg:pt-40 xl:pt-44"
    >
      <div className=" mx-auto sm:px-6 px-4 lg:px-12">
        {/* Hero Text */}
        <div className="text-center mb-8 lg:mb-12">
          <p className="hero-subtitle text-xs lg:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            <TextAppearAnimation>- The Chimera Company -</TextAppearAnimation>
          </p>

          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase max-w-xl lg:max-w-3xl mx-auto tracking-tight mb-4">
            The Doyenne of Timeless Events
          </h1>

          <h2 className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sr-only leading-relaxed">
            \n Bespoke. Luxury. Destination Event Management.
          </h2>

          <h3 className="text-sm lg:text-base text-muted-foreground max-w-xl mx-auto mb-3 sr-only tracking-wider">
            Weddings • Corporate • Social
          </h3>

          <p className="hero-description text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            From intimate celebrations to grand destination events, every
            Chimera event is curated with purpose and executed with precision.
          </p>

          <Link href="/consultation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hero-button inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase"
            >
              Start Planning Your Event
            </motion.button>
          </Link>
        </div>

        {/* Hero Image */}
        <RevealWrapper>
          <AnimatedHeroImage src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80" />
        </RevealWrapper>
      </div>
    </section>
  );
}
