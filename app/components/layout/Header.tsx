"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Updates", href: "#" },
  { label: "About Us", href: "#" },

];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <nav
        className={`transition-all duration-300 ease-in-out fixed left-1/2 transform -translate-x-1/2 ${
          scrolled ? "w-5/12" : "w-6/12"
        } mx-auto bg-black text-white flex items-center justify-between px-6 py-4 rounded-2xl`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo/aethos_small.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="text-white text-xl font-bold">YouAceIt</span>
        </Link>

        {/* Header Links - hidden on scroll */}
        <div
          className={`${
            scrolled ? "hidden" : "flex"
          } bg-[#1a1a1a] px-6 py-4 rounded-2xl gap-16 transition-all duration-300`}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white text-md hover:text-gray-300 hover:scale-105 transition duration-300 ease-in-out"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Sign Up Button - hidden on scroll */}
        {true && (
          <button className="bg-white text-black text-md font-medium rounded-xl px-8 py-4 hover:bg-gray-200 transition-colors duration-200">
            Pricing
          </button>
        )}
      </nav>
    </div>
  );
}
