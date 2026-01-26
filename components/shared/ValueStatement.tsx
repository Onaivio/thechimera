"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.15 } } };

export function ValueStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-8"
          >
            EVENTS THAT FEEL LIKE YOU
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6"
          >
            At The Chimera Company, we don't just plan events — we translate your story into an experience. Every detail is intentional. Every moment is considered. Every celebration feels effortless.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
