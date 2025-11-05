"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="container flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/images/logo.jpg"
              alt="Aidela Africa logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg md:text-xl text-neutral-900">
              Aidela Africa
            </h1>
            <p className="text-xs text-neutral-500 -mt-1">
              Talent Hub & Hiring
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/services", label: "Services" },
            { href: "/for-employers", label: "For Employers" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-700 hover:text-primary transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:brightness-95 transition-all"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-700 p-2 rounded-md hover:bg-neutral-100 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="flex flex-col px-4 py-3 space-y-3">
            <Link
              href="/services"
              className="text-neutral-700 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/for-employers"
              className="text-neutral-700 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              For Employers
            </Link>
            <Link
              href="/contact"
              className="text-neutral-700 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:brightness-95"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
