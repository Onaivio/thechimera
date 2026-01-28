"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location, setIsMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;
    const previousBodyWidth = document.body.style.width;
    const scrollY = window.scrollY;

    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      document.body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen, setIsMenuOpen]);

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
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/55"
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
                className="hidden dark:block w-full h-auto "
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
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
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
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            className="lg:hidden fixed inset-0 z-60 h-[100dvh] w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              role="button"
              aria-label="Close menu"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setIsMenuOpen(false);
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="absolute top-0 right-0 h-[100dvh] w-[86%] max-w-sm bg-background border-l border-border shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                  <Image
                    src="/logo-dark.svg"
                    alt="The Chimera Company Logo"
                    width={110}
                    height={40}
                    className="block dark:hidden"
                  />
                  <Image
                    src="/logo-light.svg"
                    alt="The Chimera Company Logo"
                    width={110}
                    height={40}
                    className="hidden dark:block"
                  />
                </Link>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="px-6 py-8">
                <nav className="flex flex-col gap-5">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ delay: 0.05 + index * 0.03, duration: 0.18 }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block text-base tracking-[0.25em] uppercase transition-colors ${
                          location === link.path ? "text-accent" : "hover:text-accent"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-10 pt-8 border-t border-border">
                  <Link
                    href="/consultation"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-block border-b-2 border-foreground pb-1 text-sm tracking-wider uppercase hover:text-accent hover:border-accent transition-colors"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
