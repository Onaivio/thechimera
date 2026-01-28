"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const container = useRef(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqs = [
    {
      question: "HOW DO I START PLANNING MY EVENT WITH YOU?",
      answer:
        "Simply reach out through our contact form or give us a call. We will schedule an initial consultation to discuss your vision, timeline, and goals. This conversation helps us understand your needs and determine how we can create an exceptional experience for you.",
    },
    {
      question: "WHAT TYPES OF EVENTS DO YOU SPECIALIZE IN?",
      answer:
        "We specialize in three primary areas: destination weddings, corporate events (product launches, conferences, executive retreats), and social celebrations (milestone birthdays, anniversaries, private gatherings). Each event is approached with the same level of care, creativity, and precision.",
    },
    {
      question: "DO YOU MANAGE DESTINATION EVENTS?",
      answer:
        "Absolutely. Destination event management is one of our core specialties. We have experience coordinating events across 20+ destinations worldwide, managing everything from venue selection and vendor coordination to guest logistics and on-site execution.",
    },
    {
      question: "HOW FAR IN ADVANCE SHOULD I BOOK YOUR SERVICES?",
      answer:
        "For destination weddings and large-scale events, we recommend booking 12-18 months in advance. Corporate events typically require 6-12 months of planning. However, we occasionally accommodate shorter timelines for intimate gatherings or urgent needs. Contact us to discuss your specific timeline.",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".faq-section-title", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-section-title",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.utils.toArray<HTMLElement>(".faq-item").forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: container },
  );

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div ref={container} className="">
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="faq-section-title text-4xl md:text-5xl text-center mb-16">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item border-b border-border pb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left py-4 hover:opacity-80 transition-opacity"
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ease-in-out shrink-0 ml-4 ${
                      openFaq === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  ref={(el) => {
                    answerRefs.current[index] = el;
                  }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openFaq === index ? `${answerRefs.current[index]?.scrollHeight}px` : "0px",
                    opacity: openFaq === index ? 1 : 0,
                  }}
                >
                  <div className="pt-2 pb-4 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
