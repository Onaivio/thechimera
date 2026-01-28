"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [show, setShow] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 100vh (home section)
      if (window.scrollY > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const current = resolvedTheme || "light";
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="theme-toggle"
          onClick={toggleTheme}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 cursor-pointer rounded-full border border-primary hover:bg-primary flex items-center justify-center duration-200 overflow-hidden bg-secondary"
          aria-label="Toggle theme"
        >
          {/* Moon Icon */}
          <FiMoon className="w-5 h-5 text-primary block dark:hidden" />
          <FiSun className="w-5 h-5 text-primary hidden dark:block" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}




