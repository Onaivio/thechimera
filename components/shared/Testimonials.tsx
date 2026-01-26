"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const fadeInScale = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.15 } } };

const testimonials = [
  {
    name: "Sophie Moore",
    quote:
      "The Chimera Company transformed our destination wedding into an unforgettable celebration. Every detail was flawless, and we could truly enjoy our day.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
  },
  {
    name: "John Carter",
    quote:
      "Our corporate launch event was seamless and sophisticated. The Chimera team understood our brand and delivered an experience that truly engaged our audience.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-16 gap-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              WORDS FROM
            </h2>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              OUR CLIENTS
            </h3>
            <p className="text-sm text-muted-foreground mt-4 max-w-md leading-relaxed">
              Because the best stories come from those who’ve experienced Chimera.
            </p>
          </motion.div>

          <motion.button
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase"
          >
            Explore Our Services
          </motion.button>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInScale}
              whileHover={{ y: -8 }}
              className="bg-card overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h4
                  className="text-xl lg:text-2xl mb-4"
               
                >
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
