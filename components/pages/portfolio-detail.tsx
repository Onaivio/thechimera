"use client";

import { ImageWithFallback } from "../ui/ImageWithFallback";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { getProjectBySlug, getRelatedProjects } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PortfolioDetail({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  const relatedProjects = getRelatedProjects(slug, 2);
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-image", {
        opacity: 0,
        scale: 1.05,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".project-header",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".gallery-image",
          {
            opacity: 0,
            scale: 0.9,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: {
              trigger: ".gallery",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
          "-=0.5"
        );
    },
    { scope: container }
  );

  // Fallback if project not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-accent hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" ref={container}>
      {/* Back Button */}
      <div className="py-8 px-6">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Hero Image */}
      <section className="px-6 mb-16">
        <div className="hero-image max-w-7xl mx-auto relative aspect-21/9 overflow-hidden">
          <ImageWithFallback
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Header */}
      <section className="py-16 px-6 project-header">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-sm text-muted-foreground tracking-wider mb-4">
                {project.category}
              </div>
              <h1 className="text-5xl md:text-7xl mb-8">{project.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-8">
              {project.details?.services && (
                <div>
                  <h3 className="text-lg mb-3">SERVICES</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {project.details.services.map((service: string, idx: number) => (
                      <div key={idx}>{service}</div>
                    ))}
                  </div>
                </div>
              )}
              {project.details?.location && (
                <div>
                  <h3 className="text-lg mb-3">LOCATION</h3>
                  <div className="text-sm text-muted-foreground">
                    {project.details.location}
                  </div>
                </div>
              )}
              {project.details?.year && (
                <div>
                  <h3 className="text-lg mb-3">YEAR</h3>
                  <div className="text-sm text-muted-foreground">
                    {project.details.year}
                  </div>
                </div>
              )}
              {project.details?.duration && (
                <div>
                  <h3 className="text-lg mb-3">DURATION</h3>
                  <div className="text-sm text-muted-foreground">
                    {project.details.duration}
                  </div>
                </div>
              )}
              {project.details?.attendees && (
                <div>
                  <h3 className="text-lg mb-3">ATTENDEES</h3>
                  <div className="text-sm text-muted-foreground">
                    {project.details.attendees}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 gallery">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.gallery.map((image: string, index: number) => (
              <div
                key={index}
                className="gallery-image relative aspect-4/3 overflow-hidden"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Narrative */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {project.challenge && (
            <>
              <h2 className="text-3xl md:text-4xl mb-6">THE CHALLENGE</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-12">
                {project.challenge}
              </p>
            </>
          )}
          {project.execution && (
            <>
              <h2 className="text-3xl md:text-4xl mb-6">OUR EXECUTION</h2>
              <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.execution}
              </p>
            </>
          )}
          {project.results && project.results.length > 0 && (
            <>
              <h2 className="text-3xl md:text-4xl mb-6 mt-12">RESULTS</h2>
              <ul className="text-base text-muted-foreground leading-relaxed space-y-3">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12">RELATED EVENTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedProjects.map((relatedProject, index: number) => (
              <Link
                href={`/portfolio/${relatedProject.slug}`}
                key={index}
                className="group"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={relatedProject.thumbnail}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl mb-2">{relatedProject.title}</h3>
                <div className="text-sm text-accent">VIEW PROJECT</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
