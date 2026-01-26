"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const fadeInScale = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.1 } } };

export function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-6">
            EVENTS THAT FEEL
          </h2>
          <h3 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-8">
            LIKE YOU
          </h3>

          <motion.p
            variants={fadeInUp}
            className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            At The Chimera Company, we don’t just plan events — we translate your story into an experience. Every detail is intentional. Every moment is considered. Every celebration feels effortless.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase"
          >
            View Our Portfolio
          </motion.button>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerFast}
          className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 lg:gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInScale}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={image}
                alt={`Showcase ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
