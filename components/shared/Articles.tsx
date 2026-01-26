"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const fadeInScale = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.1 } } };

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    category: "PLANNING TIPS",
    title: "How to Choose the Perfect Destination Wedding Venue",
    date: "January 15, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "INSPIRATION",
    title: "Modern Elegance: Corporate Event Trends for 2024",
    date: "January 12, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    category: "TRENDS",
    title: "The Rise of Sustainable Luxury Events",
    date: "January 10, 2024",
  },
];

const articleGrid2 = [
  {
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    category: "GUIDE",
    title: "Essential Timeline for Wedding Planning",
    date: "January 08, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    category: "STYLE",
    title: "Creating Cohesive Event Aesthetics",
    date: "January 05, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    category: "DECOR",
    title: "Floral Design Trends for Intimate Gatherings",
    date: "January 03, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: "TIPS",
    title: "Maximizing Guest Experience at Corporate Events",
    date: "January 01, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "TRENDS",
    title: "Cultural Celebrations: Honoring Traditions in Modern Events",
    date: "December 28, 2023",
  },
];

export function Articles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-xs lg:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Insights & Inspiration
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            OUR LATEST ARTICLES
          </h2>
        </motion.div>

        {/* First Grid - 3 columns */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerFast}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8"
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={fadeInScale}
              whileHover={{ y: -12 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/3 overflow-hidden mb-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {article.category}
              </p>
              <h3 className="text-lg lg:text-xl mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-muted-foreground">{article.date}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Second Grid - 5 columns */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerFast}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {articleGrid2.map((article, index) => (
            <motion.article
              key={index}
              variants={fadeInScale}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden mb-3">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                {article.category}
              </p>
              <h4 className="text-sm mb-1 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h4>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
