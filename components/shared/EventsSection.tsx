"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "../ui/section-header";
import { Button } from "../ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "01. Weddings",
    images: [
      "https://res.cloudinary.com/djnzqckey/image/upload/v1764517255/c624b58d-ef08-4ef0-bc05-ebc09774ee70_njsheo.png",
      "https://res.cloudinary.com/djnzqckey/image/upload/v1764517267/c7fdabbe-fde7-4fde-b77c-eb7747e6c633_vkaab2.png",
      // "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // "https://images.unsplash.com/photo-1505944357431-27579db47558?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    title: "02. Corporate Events",
    images: [
      "https://res.cloudinary.com/djnzqckey/image/upload/v1764517251/c54fa6ee-de93-4de9-ad6f-6ad669c2aef6_lhv8z8.png",
      "https://res.cloudinary.com/djnzqckey/image/upload/v1764517269/fa12b164-b8f4-4b8f-b9ac-6b9af210f033_hohczp.png",
      // "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    title: "03. Social Gatherings",
    images: [
      "https://res.cloudinary.com/djnzqckey/image/upload/v1764517896/190b2d43-c090-4467-af83-a07f0c47e6e9_zpyob8.webp",
      "https://res.cloudinary.com/djnzqckey/image/upload/v1764517263/4150347e-bf52-4bf5-9c13-e9c1ff51d6e2_m3frrp.png",
      // "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

export function EventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Animate title
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        opacity: 0,
        x: -100,
      });
    }

    // Animate event cards with stagger
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".event-card");
      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
          opacity: 0,
          y: 100,
          stagger: 0.2,
        });
      }
    }
  }, []);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="mx-auto max-w-7xl bg-(--bg-primary) theme-transition"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column (Sticky) */}
          <div className="flex flex-col gap-10 lg:sticky lg:top-32 h-fit">
            <SectionHeader label="OUR EVENTS" />

            <h2
              ref={titleRef}
              className="text-[clamp(40px,5vw,80px)] leading-[0.9] text-(--color-primary) uppercase"
            >
              Luxury. Comfort. Perfection.
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-(--text-primary) text-lg mb-4 font-['Satoshi']">
                From intimate gatherings to grand celebrations, we have the
                perfect space for your special occasion.
              </p>
              <div className="flex gap-4">
                <Link href="/consultation">
                  <Button variant="outline">Book an Event</Button>
                </Link>
                {/* <Link href="/venues">
                  <Button variant="outline">View Venues</Button>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Right Column - Event Cards */}
          <div ref={cardsRef} className="flex flex-col gap-8">
            {events.map((event) => (
              <motion.div
                key={event.title}
                className="event-card flex flex-col gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-(--text-primary) uppercase tracking-tight">
                  {event.title}
                </h3>

                <div className="relative h-80 lg:h-96 overflow-hidden group">
                  {event.images.map((img, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={img}
                      alt={`${event.title} - Image ${imgIndex + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`object-cover transition-opacity duration-500 ${
                        imgIndex === 0
                          ? "opacity-100 group-hover:opacity-0"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
