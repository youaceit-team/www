import React from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#" },
  { label: "Documents", href: "#" },
  { label: "History", href: "#" },
  { label: "Settings", href: "#" },
];

export default function Header() {
  return (
    <div className="p-6 bg-gray-100">
      <nav className="w-full bg-black text-white flex items-center justify-between px-6 py-4 rounded-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo/aethos_small.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="text-white text-xl font-bold">Aethos</span>
        </Link>
        {/* Header Links */}
        <div className="bg-[#1a1a1a] px-6 py-4 rounded-2xl flex gap-16">
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
        {/* Sign Up Button */}
        <button className="bg-white text-black text-md font-medium rounded-xl px-8 py-4 hover:bg-gray-200 transition-colors duration-200">
          Sign Up
        </button>
      </nav>
    </div>
  );
}
