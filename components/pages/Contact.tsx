"use client";

import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const container = useRef(null);

  const faqs = [
    {
      question: 'HOW DO I START PLANNING MY EVENT WITH YOU?',
      answer: 'Simply reach out through our contact form or give us a call. We will schedule an initial consultation to discuss your vision, timeline, and goals. This conversation helps us understand your needs and determine how we can create an exceptional experience for you.',
    },
    {
      question: 'WHAT TYPES OF EVENTS DO YOU SPECIALIZE IN?',
      answer: 'We specialize in three primary areas: destination weddings, corporate events (product launches, conferences, executive retreats), and social celebrations (milestone birthdays, anniversaries, private gatherings). Each event is approached with the same level of care, creativity, and precision.',
    },
    {
      question: 'DO YOU MANAGE DESTINATION EVENTS?',
      answer: 'Absolutely. Destination event management is one of our core specialties. We have experience coordinating events across 20+ destinations worldwide, managing everything from venue selection and vendor coordination to guest logistics and on-site execution.',
    },
    {
      question: 'HOW FAR IN ADVANCE SHOULD I BOOK YOUR SERVICES?',
      answer: 'For destination weddings and large-scale events, we recommend booking 12-18 months in advance. Corporate events typically require 6-12 months of planning. However, we occasionally accommodate shorter timelines for intimate gatherings or urgent needs. Contact us to discuss your specific timeline.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-title", { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
      .from(".hero-subtitle", { opacity: 0, y: 30, duration: 1, ease: "power3.out" }, "-=0.8");

    gsap.utils.toArray<HTMLElement>(".form-field").forEach(field => {
      gsap.from(field, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: field,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      });
    });

    gsap.from(".faq-section-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".faq-section-title",
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });

    gsap.utils.toArray<HTMLElement>(".faq-item").forEach(item => {
      gsap.from(item, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });
    });

  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen">
      <section className="pt-32 lg:pt-40 pb-24 px-6 text-center">
        <div>
          <h1 className="hero-title text-6xl md:text-8xl mb-6">
            GET IN TOUCH
          </h1>
          <p className="hero-subtitle text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to create something exceptional? Tell us about your vision.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="form-field">
              <label htmlFor="fullName" className="block text-sm tracking-wider mb-3">
                FULL NAME*
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="phoneNumber" className="block text-sm tracking-wider mb-3">
                PHONE NUMBER*
              </label>
              <input
                type="tel"
                id="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="block text-sm tracking-wider mb-3">
                EMAIL ADDRESS*
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-field">
              <label htmlFor="subject" className="block text-sm tracking-wider mb-3">
                SUBJECT*
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                placeholder="What is this about?"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="block text-sm tracking-wider mb-3">
                MESSAGE*
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:outline-none transition-colors"
                placeholder="Tell us more about your project..."
              />
            </div>

            <div className="form-field text-center pt-8">
              <button
                type="submit"
                className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="faq-section-title text-4xl md:text-5xl text-center mb-16">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item border-b border-border pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4"
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="pt-2 pb-4 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
