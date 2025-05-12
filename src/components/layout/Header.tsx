"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownColumn {
  header: string;
  items: DropdownItem[];
}

interface DropdownContent {
  leftColumn: DropdownColumn;
  rightColumn: DropdownColumn;
}

interface NavLink {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdown?: DropdownContent;
}

const navLinks: NavLink[] = [
  { 
    label: "Product", 
    href: "#",
    hasDropdown: true,
    dropdown: {
      leftColumn: {
        header: "Platform",
        items: [
          { label: "Intelligent Canvas™", href: "#" },
          { label: "AI", href: "#" },
          { label: "Integrations", href: "#" },
          { label: "Security", href: "#" },
          { label: "Developer Platform", href: "#" },
        ]
      },
      rightColumn: {
        header: "Capabilities",
        items: [
          { label: "Docs", href: "#" },
          { label: "Tables", href: "#" },
          { label: "Spaces", href: "#" },
          { label: "Slides", href: "#" },
          { label: "Diagramming", href: "#" },
        ]
      }
    }
  },
  { 
    label: "Updates", 
    href: "#",
    hasDropdown: true,
    dropdown: {
      leftColumn: {
        header: "What's New",
        items: [
          { label: "Changelog", href: "#" },
          { label: "Beta Features", href: "#" },
          { label: "Release Notes", href: "#" },
        ]
      },
      rightColumn: {
        header: "Resources",
        items: [
          { label: "Documentation", href: "#" },
          { label: "Tutorials", href: "#" },
          { label: "Support", href: "#" },
        ]
      }
    }
  },
  { 
    label: "About Us", 
    href: "#",
    hasDropdown: false
  },
  { 
    label: "Pricing", 
    href: "#",
    hasDropdown: true,
    dropdown: {
      leftColumn: {
        header: "Plans",
        items: [
          { label: "Individual", href: "#" },
          { label: "Team", href: "#" },
          { label: "Enterprise", href: "#" },
          { label: "Education", href: "#" },
        ]
      },
      rightColumn: {
        header: "Compare",
        items: [
          { label: "Feature Comparison", href: "#" },
          { label: "Pricing Calculator", href: "#" },
          { label: "Contact Sales", href: "#" },
        ]
      }
    }
  },
];

export default function Header() {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const navItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 20;
      
      if (Math.abs(currentScrollY - lastScrollY.current) > threshold) {
        setScrollingUp(currentScrollY < lastScrollY.current);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const getDropdownPosition = (label: string) => {
    const navItem = navItemRefs.current[label];
    if (!navItem) return {};
    
    const navItemRect = navItem.getBoundingClientRect();
    return {
      top: `${navItemRect.bottom + 12}px`,
      left: `${navItemRect.left}px`,
      width: '460px',
      transformOrigin: 'top left'
    };
  };

  const renderDropdownContent = () => {
    const activeLink = navLinks.find(link => link.label === activeDropdown);
    if (!activeLink?.dropdown) return null;

    return (
      <div className="flex p-6">
        {/* Left Column */}
        <div className="flex-1 pr-8 border-r border-gray-100">
          <h3 className="font-medium text-gray-900 mb-4">
            {activeLink.dropdown.leftColumn.header}
          </h3>
          {activeLink.dropdown.leftColumn.items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-2 text-sm text-gray-800 hover:text-gray-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Right Column */}
        <div className="flex-1 pl-8">
          <h3 className="font-medium text-gray-900 mb-4">
            {activeLink.dropdown.rightColumn.header}
          </h3>
          {activeLink.dropdown.rightColumn.items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-2 text-sm text-gray-800 hover:text-gray-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <motion.nav
        ref={navRef}
        animate={{ width: scrollingUp ? "70%" : "35%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed left-1/2 transform -translate-x-1/2 z-50 mx-auto bg-[#ffffff] text-white flex items-center justify-between px-6 py-2 rounded-2xl shadow-md"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/youaceit.png" alt="Logo" width={36} height={36} />
          <span className="text-black text-xl font-medium">YouAceIt!</span>
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
              className="bg-[#fde050] px-6 py-3 rounded-2xl gap-8 flex relative"
            >
              {navLinks.map(({ label, href, hasDropdown }) => (
                <div 
                  key={label} 
                  className="relative" 
                  onMouseEnter={() => hasDropdown && handleMouseEnter(label)}
                  onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
                  ref={(el) => { navItemRefs.current[label] = el; }}
                >
                  {hasDropdown ? (
                    <div className="text-black text-md cursor-default whitespace-nowrap shrink-0 relative flex items-center">
                      {label}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  ) : (
                    <a
                      href={href}
                      className="text-black text-md hover:text-gray-700 transition duration-300 ease-in-out whitespace-nowrap shrink-0"
                    >
                      {label}
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 ml-auto">
          <AnimatePresence>
            {scrollingUp && (
              <motion.button
                key="login-button"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="border border-gray-300 text-black text-md font-medium rounded-xl px-6 py-2 hover:bg-gray-50 transition-colors"
              >
                Login
              </motion.button>
            )}
          </AnimatePresence>

          <motion.button
            key="signup-button"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-blue-600 text-white text-md font-medium rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Sign up free
          </motion.button>
        </div>
      </motion.nav>
      
      {/* Dropdown Menu */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ 
              duration: 0.25, 
              ease: [0.04, 0.62, 0.23, 0.98],
              opacity: { duration: 0.2 } 
            }}
            style={getDropdownPosition(activeDropdown)}
            className="fixed bg-white rounded-lg shadow-xl z-40 overflow-hidden"
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            {renderDropdownContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}