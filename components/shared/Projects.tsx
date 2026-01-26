"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const slideInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const staggerContainer = { visible: { transition: { staggerChildren: 0.15 } } };

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    swiperInstance?.slidePrev();
  };

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-card">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl max-w-md mx-auto tracking-tight">
            A LOOK AT OUR RECENT EVENTS
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed">
            Explore a selection of our recent events, each one a testament to
            meticulous planning, creative vision, and flawless execution.
          </p>
        </motion.div>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.slug}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                {/* Left: Project Info */}
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                  className="lg:col-span-1"
                >
                  <motion.div variants={fadeInUp} className="mb-6">
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                      {project.location}
                    </p>
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                      {project.date}
                    </p>
                  </motion.div>

                  <motion.h4
                    variants={fadeInUp}
                    className="text-3xl lg:text-4xl tracking-tight mb-6"
                  >
                    {project.title}
                  </motion.h4>

                  <motion.p
                    variants={fadeInUp}
                    className="text-sm text-muted-foreground leading-relaxed mb-8"
                  >
                    {project.shortDescription || project.description}
                  </motion.p>

                  <Link href={`/portfolio/${project.slug}`}>
                    <motion.button
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent transition-colors"
                    >
                      View Project
                    </motion.button>
                  </Link>

                  {/* Navigation */}
                  <motion.div variants={fadeInUp} className="flex gap-4 mt-12">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrev}
                      disabled={!swiperInstance}
                      className="w-12 h-12 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Previous project"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleNext}
                      disabled={!swiperInstance}
                      className="w-12 h-12 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Next project"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>

                  {/* Project Counter */}
                  <motion.div
                    variants={fadeInUp}
                    className="mt-6 text-sm text-muted-foreground"
                  >
                    <span className="text-foreground font-medium">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-2">/</span>
                    <span>{String(projects.length).padStart(2, "0")}</span>
                  </motion.div>
                </motion.div>

                {/* Right: Project Images */}
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={slideInRight}
                  className="grid grid-cols-2 gap-4 lg:col-span-2"
                >
                  {project.gallery.slice(0, 2).map((image, index) => (
                    <Link
                      key={index}
                      href={`/portfolio/${project.slug}`}
                      className="block"
                    >
                      <motion.div
                        whileHover={{ y: -12, scale: 1.02 }}
                        className="relative aspect-3/4 overflow-hidden cursor-pointer group"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
