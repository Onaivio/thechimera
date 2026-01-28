"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useUiStore } from "@/stores/ui-store";

export function Header() {
  const location = usePathname();
  const isMenuOpen = useUiStore((s) => s.isMobileMenuOpen);
  const setIsMenuOpen = useUiStore((s) => s.setMobileMenuOpen);
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    let lastScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          if (currentScroll > lastScroll && currentScroll > 100) {
            // Downscroll
            gsap.to(headerRef.current, { y: "-100%", duration: 0.3, ease: "power3.out" });
          } else if (currentScroll < lastScroll) {
            // Upscroll
            gsap.to(headerRef.current, { y: "0%", duration: 0.3, ease: "power3.out" });
          }
          lastScroll = currentScroll <= 0 ? 0 : currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Consultation", path: "/consultation" },
    { name: "Explore", path: "/explore" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md "
    >
      <div className="max-w-350 mx-auto px-6 lg:px-12 py-3">
        <div className="flex items-center lg:justify-center justify-between gap-8 lg:gap-12">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex uppercase gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm tracking-wider transition-colors ${
                  location === link.path ? "text-accent" : "hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Brand Name */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo-dark.svg"
                alt="The Chimera Company Logo"
                width={110}
                height={40}
                priority
                className="block dark:hidden"
              />
              <Image
                src="/logo-light.svg"
                alt="The Chimera Company Logo"
                width={110}
                height={40}
                priority
                className="hidden dark:block"
              />
            </motion.div>
          </Link>
          {/* Desktop Navigation (Right) */}
          <nav className="hidden lg:flex uppercase gap-8">
            {navLinks.slice(3, 6).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm tracking-wider transition-colors ${
                  location === link.path ? "text-accent" : "hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
   

          {/* Logo/Menu */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-foreground lg:hidden"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>

          {/* CTA Button */}
          {/* <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm tracking-wider uppercase"
            >
              Get in Touch
            </motion.button>
          </Link> */}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-6 border-t border-border/50 pt-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base tracking-wider transition-colors ${
                    location === link.path ? "text-accent" : "hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
