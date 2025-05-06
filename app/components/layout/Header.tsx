"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Updates", href: "#" },
  { label: "About Us", href: "#" },
];

export default function Header() {
  const [scrollingUp, setScrollingUp] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 20; // Add a threshold to prevent frequent toggling
      if (Math.abs(currentScrollY - lastScrollY.current) > threshold) {
        if (currentScrollY < lastScrollY.current) {
          setScrollingUp(true); // Scrolling up — grow
        } else {
          setScrollingUp(false); // Scrolling down — shrink
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-6">
      <motion.nav
        animate={{
          width: scrollingUp ? "50%" : "25%", // grow when scrolling up
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed left-1/2 transform -translate-x-1/2 z-50 mx-auto bg-black text-white rounded-2xl"
      >
        <div className="flex items-center justify-between px-6 py-2 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image src="/youaceit.png" alt="Logo" width={36} height={36} />
            <span className="text-white text-xl font-medium">YouAceIt!</span>
          </Link>

          {/* Center Content - Nav Links */}
          <AnimatePresence>
            {scrollingUp && (
              <motion.div
                key="nav-links"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] px-6 py-3 rounded-2xl flex gap-16"
              >
                {navLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-white text-md hover:text-gray-300 hover:scale-105 transition duration-300 ease-in-out whitespace-nowrap shrink-0"
                  >
                    {label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pricing Button - Fixed position */}
          <motion.button
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white text-black text-md font-medium rounded-xl px-8 py-3 hover:bg-gray-200 shrink-0 z-10"
          >
            Pricing
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
}
