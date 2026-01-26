"use client";
import { useRef } from "react";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const container = useRef<HTMLElement>(null);

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Mail, href: "#" },
  ];

  const footerLinks = [
    {
      title: "SERVICES",
      links: [
        "Weddings",
        "Corporate Events",
        "Social Events",
        "Consultation",
      ],
    },
    {
      title: "COMPANY",
      links: ["About Us", "Portfolio", "Approach", "Contact"],
    },
    {
      title: "RESOURCES",
      links: ["Blog", "Case Studies", "Testimonials", "FAQ"],
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".footer-cta-title", {
        opacity: 0,
        y: 50,
        duration: 1,
      })
        .from(
          ".footer-cta-subtitle",
          {
            opacity: 0,
            y: 40,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          ".footer-cta-p",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.8"
        )
        .from(
          ".footer-cta-btn",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".footer-links",
          {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=1"
        )
        .from(
          ".footer-bottom-bar",
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          "-=0.5"
        );
    },
    { scope: container }
  );

  return (
    <footer ref={container} className="bg-foreground text-background py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12 lg:mb-16"
        >
          {/* Left: CTA */}
          <div>
            <h2 className="footer-cta-title text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-6">
              READY TO CREATE
            </h2>
            <h3 className="footer-cta-subtitle text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-8">
              SOMETHING EXCEPTIONAL?
            </h3>
            <p className="footer-cta-p text-sm opacity-80 mb-8 max-w-md leading-relaxed">
              Let’s design an experience your guests will never forget.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="footer-cta-btn inline-block border-b-2 border-background pb-1 text-sm tracking-wider uppercase"
            >
              Schedule Your Consultation
            </motion.button>
          </div>

          {/* Right: Links */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {footerLinks.map((column, index) => (
              <div key={index} className="footer-links">
                <h4 className="text-sm tracking-[0.2em] uppercase mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        whileHover={{ x: 4 }}
                        href="#"
                        className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom-bar pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} The Chimera Company. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
