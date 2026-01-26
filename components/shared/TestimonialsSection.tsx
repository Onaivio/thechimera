"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import { TestimonialCard } from "../ui/testimonial-card";

const testimonials = [
  {
    quote:
      "The Chimera Company transformed our destination wedding into an unforgettable experience. Every detail was flawless, and the entire process felt effortless.",
    name: "Sarah & Michael Chen",
    role: "Wedding Clients",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Professional, discrete, and impeccably organized. Our annual gala was the most successful yet. The Chimera Company understands luxury event management.",
    name: "Victoria Blackwood",
    role: "CEO, Blackwood Enterprises",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "From concept to execution, they delivered beyond our expectations. Our celebration felt intentional, elegant, and uniquely ours.",
    name: "James Morrison",
    role: "Anniversary Celebration",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Working with The Chimera Company was a revelation. They listened deeply, planned meticulously, and created magic. I recommend them without reservation.",
    name: "Alexandra Sterling",
    role: "Corporate Event Coordinator",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Our wedding felt like a dream brought to life. The team at Chimera handled everything with grace and precision. Simply exceptional.",
    name: "Isabella & David Laurent",
    role: "Wedding Clients",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "The attention to detail and level of service exceeded anything we&apos;ve experienced. Our product launch was a resounding success thanks to their expertise.",
    name: "Marcus Wellington",
    role: "Director of Marketing",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Animate title
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        scale: 0.8,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-(--bg-primary) overflow-hidden py-24 transition-colors duration-300"
    >
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-36 bg-linear-to-r from-white dark:from-secondary to-transparent z-20 pointer-events-none transition-colors duration-300" />
      <div className="absolute right-0 top-0 bottom-0 w-36 bg-linear-to-l from-white dark:from-secondary to-transparent z-10 pointer-events-none transition-colors duration-300" />

      <div className="text-center mb-16">
        <h2
          ref={titleRef}
          className="text-[clamp(40px,5vw,60px)] leading-[0.9] text-(--color-primary) uppercase"
        >
          Words From Our Clients
        </h2>
        <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
          Because the best stories come from those who&apos;ve experienced Chimera.
        </p>
      </div>

      {/* Marquee Scrolling Tracks */}
      <div className="flex flex-col gap-8 py-10">
        {/* Top Row - Right to Left */}
        <Marquee gradient={false} speed={40} pauseOnHover direction="left">
          <div className="flex gap-6 px-4">
            {testimonials.map((testimonial, index) => (
              <div key={`row1-${index}`} className="testimonial-card">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
            {testimonials.map((testimonial, index) => (
              <div key={`row1-dup-${index}`} className="testimonial-card">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Bottom Row - Left to Right */}
        <Marquee gradient={false} speed={40} pauseOnHover direction="right">
          <div className="flex gap-6 px-4">
            {[...testimonials].reverse().map((testimonial, index) => (
              <div key={`row2-${index}`} className="testimonial-card">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
            {[...testimonials].reverse().map((testimonial, index) => (
              <div key={`row2-dup-${index}`} className="testimonial-card">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
