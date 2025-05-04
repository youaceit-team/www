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

      if (currentScrollY < lastScrollY.current) {
        setScrollingUp(true); // Scrolling up — grow
      } else {
        setScrollingUp(false); // Scrolling down — shrink
      }

      lastScrollY.current = currentScrollY;
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
        className="fixed left-1/2 transform -translate-x-1/2 z-50 mx-auto bg-black text-white flex items-center justify-between px-6 py-2 rounded-2xl"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/youaceit.png" alt="Logo" width={32} height={32} />
          <span className="text-white text-xl font-bold">YouAceIt</span>
        </Link>

        {/* Header Links */}
        <AnimatePresence>
          {scrollingUp && (
            <motion.div
              key="nav-links"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-[#1a1a1a] px-6 py-3 rounded-2xl gap-16 flex"
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

        {/* Sign Up Button */}

        <motion.button
          key="pricing-button"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white text-black text-md font-medium rounded-xl px-8 py-3 hover:bg-gray-200"
        >
          Pricing
        </motion.button>
      </motion.nav>
    </div>
  );
}
