"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Clock, Target, Users } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import Link from "next/link";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const container = useRef(null);
  const stats = [
    { value: "500+", label: "EVENTS DELIVERED" },
    { value: "20+", label: "DESTINATIONS WORLDWIDE" },
    { value: "99%", label: "CLIENT SATISFACTION RATE" },
    { value: "10+", label: "YEARS OF EXCELLENCE" },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "FOUNDER & CREATIVE DIRECTOR",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      social: ["LinkedIn", "Instagram", "Email"],
    },
    {
      name: "James Carter",
      role: "DIRECTOR OF OPERATIONS",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      social: ["LinkedIn", "Instagram", "Email"],
    },
    {
      name: "Emily Zhang",
      role: "LEAD EVENT DESIGNER",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      social: ["LinkedIn", "Instagram", "Email"],
    },
    {
      name: "Michael Brooks",
      role: "CLIENT RELATIONS DIRECTOR",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      social: ["LinkedIn", "Instagram", "Email"],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "BESPOKE EXPERIENCES",
      description:
        "Every event is designed to reflect your unique vision, values, and story.",
    },
    {
      icon: Clock,
      title: "FLAWLESS EXECUTION",
      description:
        "Seamless coordination and impeccable timing ensure your event unfolds perfectly.",
    },
    {
      icon: Target,
      title: "METICULOUS DETAIL",
      description:
        "We obsess over every element so you can enjoy every moment.",
    },
    {
      icon: Award,
      title: "DISCRETION & TRUST",
      description: "Your privacy and peace of mind are our highest priorities.",
    },
  ];

  useGSAP(
    () => {
      // Hero section animations
      gsap.from(".about-hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".about-hero-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.from(".about-hero-image", {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      // Stats section
      gsap.from(".stats-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-title",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".stat-item", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stat-item",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Story section
      gsap.from(".story-image", {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-image",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".story-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-content",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Team section
      gsap.from(".team-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-title",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".team-member", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-member",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Benefits section
      gsap.from(".benefits-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefits-title",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".benefit-item", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefit-item",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="min-h-screen">
      {/* Great Minds, Grand Mission */}
      <section className="py-32 px-6 lg:pt-44">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="about-hero-image relative aspect-3/4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMG9mZmljZXxlbnwxfHx8fDE3NjkwMTk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern interior design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="about-hero-title text-5xl md:text-7xl mb-8">
                ABOUT
                <br />
                THE CHIMERA COMPANY
              </h1>
              <p className="about-hero-text text-base text-muted-foreground leading-relaxed">
                The Chimera Company is a luxury event management brand known for
                discretion, elegance, and precision. We serve clients who want
                more than a beautiful event — they want an experience that feels
                intentional, seamless, and unforgettable.
              </p>
              <p className="about-hero-text text-base text-muted-foreground leading-relaxed mt-4">
                From destination weddings to executive corporate experiences,
                our work reflects a commitment to excellence and a deep respect
                for every client&apos;s vision.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="about-hero-text inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider mt-4 lg:mt-6 uppercase"
                >
                  Plan Your Event
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Numbers */}
      <section className="py-12 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h2 className="stats-title text-4xl md:text-5xl lg:text-7xl lg:sticky lg:top-32 h-fit">
              OUR NUMBERS SPEAK FOR US
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item text-center">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 font-light">
                    {stat.value}
                  </h2>
                  <div className="text-sm text-muted-foreground tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Story Behind Our Company */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="story-content">
              <h2 className="text-5xl md:text-6xl max-w-lg mb-8">
                THE STORY BEHIND THE CHIMERA COMPANY
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  Founded with a singular vision: to redefine luxury event
                  management through authentic storytelling and flawless
                  execution. What began as a boutique wedding planning service
                  has evolved into a full-service event management firm trusted
                  by discerning clients worldwide.
                </p>
                <p>
                  Our name, Chimera, represents the fusion of imagination and
                  reality — transforming your boldest visions into tangible,
                  breathtaking experiences. We believe every event should feel
                  both elevated and effortless.
                </p>
                <p>
                  Today, we specialize in destination weddings, high-level
                  corporate events, and intimate social celebrations. Our
                  approach is rooted in deep listening, creative design, and
                  operational excellence — ensuring every detail serves the
                  larger story.
                </p>
              </div>
            </div>
            <div className="story-image relative aspect-square">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757439402103-fc35542f96f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbHV4dXJ5JTIwZnVybml0dXJlfGVufDF8fHx8MTc2OTAxOTkyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury furniture design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* The Benefits of Working With Us */}
      <section className="py-24 sm:px-6 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="benefits-title mb-6 lg:sticky lg:top-32 h-fit">
              <h2 className="sm:text-5xl mb-6 max-w-lg text-4xl md:text-5xl lg:text-6xl">
                THE BENEFITS OF WORKING WITH US
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item w-full">
                  <div className="w-full mx-auto mb-4 flex items-center justify-start">
                    <benefit.icon
                      className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
                      strokeWidth={0.8}
                    />
                  </div>
                  <h3 className="text-lg xl:text-xl mb-2 tracking-wider font-medium">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="team-title text-center mb-16">
              <h2 className="text-5xl mb-6">MEET OUR TEAM</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Our talented event designers and strategists bring decades of
                combined experience and an unwavering commitment to creating
                extraordinary moments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="team-member group">
                  <div className="relative aspect-3/4 mb-6 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground tracking-wider mb-4">
                    {member.role}
                  </p>
                  {/* <div className="flex gap-4 text-sm">
                    {member.social.map((platform, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="hover:text-accent transition-colors"
                      >
                        {platform[0]}
                      </a>
                    ))}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
