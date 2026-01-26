"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export function VideoBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Text Overlay */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="relative z-10 text-center mb-12"
        >
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl tracking-tight text-card"
            style={{
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            READY TO CREATE
          </h2>
          <h3
            className="text-4xl lg:text-5xl xl:text-6xl tracking-tight text-card mt-2"
            style={{
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            SOMETHING EXCEPTIONAL?
          </h3>
        </motion.div>

        {/* Image with Parallax */}
        <motion.div
          style={{ y }}
          className="relative w-full aspect-21/9 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80"
            alt="Interior space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20"></div>
        </motion.div>
      </div>
    </section>
  );
}
