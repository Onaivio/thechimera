"use client";

import { ImageWithFallback } from "../ui/ImageWithFallback";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { projects } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Portfolio() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".project-item").forEach((item) => {
        const image = item.querySelector(".project-image");
        const content = item.querySelector(".project-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        tl.from(image, {
          opacity: 0,
          scale: 1.05,
          duration: 1,
          ease: "power3.out",
        }).from(
          content,
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        );
      });
    },
    { scope: container },
  );

  return (
    <div className="min-h-screen" ref={container}>
      {/* Hero Section */}
      <section className="relative h-[60vh] mt-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200"
              alt="Portfolio hero 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
              alt="Portfolio hero 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-6">
          <h1 className="hero-title text-white text-6xl md:text-8xl mb-6 max-w-2xl">
            OUR WORK SPEAKS FOR ITSELF
          </h1>
          <p className="hero-subtitle md:text-lg text-white max-w-2xl mx-auto opacity-90">
            From intimate weddings to grand corporate galas, explore how we
            transform ideas into extraordinary experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-item grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center"
              >
                {/* Left: Project Info */}
                <div className="lg:col-span-1 order-2 lg:order-1">
                  <div className="mb-6">
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                      {project.location}
                    </p>
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                      {project.date}
                    </p>
                  </div>

                  <h4 className="text-3xl lg:text-4xl tracking-tight mb-6">
                    {project.title}
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    {project.shortDescription || project.description}
                  </p>

                  <Link href={`/portfolio/${project.slug}`}>
                    <button className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent transition-colors">
                      View Project
                    </button>
                  </Link>
                </div>

                {/* Right: Project Image */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="block group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                      <ImageWithFallback
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
