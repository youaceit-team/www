"use client";

import Link from "next/link";
import ShinyText from "../animations/ShinyText";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const sections = [
    {
      title: 'Updates',
      links: [
        { name: 'Fitonist', href: '/cases/fitonist' },
        { name: 'Brainforest', href: '/cases/brainforest' },
        { name: 'Cybervergent', href: '/cases/cybervergent' },
        { name: 'Nopan', href: '/cases/nopan' },
        { name: 'Ramos', href: '/cases/ramos' },
      ],
    },
    {
      title: 'Pricing',
      links: [
        { name: 'Complex solution', href: '/services/complex-solution' },
        { name: 'Branding', href: '/services/branding' },
        { name: 'Design', href: '/services/design' },
        { name: 'Development', href: '/services/development' },
      ],
    },
    {
      title: 'About us',
      links: [
        { name: 'Numbers', href: '/about/numbers' },
        { name: 'Mission', href: '/about/mission' },
        { name: 'Values', href: '/about/values' },
      ],
    },
  ];

  return (
    <footer className="bg-[#1c1c1e] text-white px-8 md:px-20 py-12 text-sm md:text-base">
      {/* Mobile: Email + Social */}
      <div className="flex flex-col md:hidden items-start gap-4 mb-12 mt-5">
        <a
          href="mailto:hello@youaceit.com"
          className="text-2xl font-medium text-white relative hover-underline cursor-pointer"
          style={{ '--underline-offset': '-6px' } as React.CSSProperties}
        >
          hello@youaceit.com
        </a>
        <a
          href="https://www.linkedin.com/company/youaceit"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#171717] text-white rounded-2xl p-3 inline-block transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#fe4a22] hover:text-black hover:scale-105 hover:shadow-[0_8px_30px_rgba(254,74,34,0.35)]"
        >
          <FaLinkedinIn className="text-2xl" />
        </a>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 text-[#737373] text-sm md:text-lg md:mb-0">
          {sections.map((section) => (
            <div key={section.title}>
              <ShinyText
                text={section.title}
                speed={3}
                className="font-medium text-lg md:text-xl mb-4 md:mb-6"
              />
              <ul className="space-y-3 md:space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#999999] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desktop: Email + Social */}
        <div className="hidden md:flex flex-col items-end">
          <a
            href="mailto:hello@youaceit.com"
            className="text-5xl md:text-6xl font-medium mb-6 text-white relative hover-underline cursor-pointer"
            style={{ '--underline-offset': '-6px' } as React.CSSProperties}
          >
            hello@youaceit.com
          </a>
          <a
            href="https://www.linkedin.com/company/youaceit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171717] text-white rounded-3xl p-4 inline-block transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#fe4a22] hover:text-black hover:scale-105 hover:shadow-[0_8px_30px_rgba(254,74,34,0.35)]"
          >
            <FaLinkedinIn className="text-5xl" />
          </a>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full h-px bg-divider my-8 mt-16" />

      {/* Copyright and location */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[#a3a3a3] font-medium text-sm md:text-xl space-y-4 md:space-y-0">
      <span className="block md:inline">
        &copy; 2025 YouAceIt!<br className="md:hidden" /> All rights reserved.
      </span>
      <span>Singapore, Singapore</span>
    </div>
    </footer>
  );
}