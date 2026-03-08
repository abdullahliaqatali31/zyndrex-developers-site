"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/websprint", label: "WebSprint", highlight: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1E2E45] bg-[#0A0F1E]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight text-[#F0F4FF] hover:text-[#2D7DFA] transition-colors flex items-center gap-1"
        >
          <span className="text-[#2D7DFA]">[</span>
          ZYNDREX
          <span className="text-[#2D7DFA]">]</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-[family-name:var(--font-dm-sans)] text-sm transition-colors",
                  link.highlight ? "text-[#00D4A0] hover:text-[#00D4A0]/80" : 
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-[#F0F4FF]"
                    : "text-[#8B9AB5] hover:text-[#F0F4FF]"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-md bg-[#2D7DFA] px-4 py-2 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white transition-colors hover:bg-[#2D7DFA]/90"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#8B9AB5] hover:text-[#F0F4FF] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#1E2E45] bg-[#0A0F1E] px-6 pb-4"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block text-sm font-[family-name:var(--font-dm-sans)] transition-colors",
                      link.highlight ? "text-[#00D4A0] hover:text-[#00D4A0]/80" : 
                      pathname === link.href || pathname.startsWith(link.href + "/")
                        ? "text-[#F0F4FF]"
                        : "text-[#8B9AB5] hover:text-[#F0F4FF]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block rounded-md bg-[#2D7DFA] px-4 py-2 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
