"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-white to-[#f0f9ff] text-neutral-900">
      {/* subtle background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-[#ED1E79]/25 blur-3xl rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-[#0649B5]/15 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto grid gap-10 md:grid-cols-2 items-center py-20 px-6">
        {/* Left text section */}
        <div className="relative z-20 bg-white/80 backdrop-blur-sm p-4 rounded-lg md:bg-transparent md:backdrop-blur-0 md:p-0">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900"
          >
            Connect with vetted, job-ready{" "}
            <span className="text-[#ED1E79]">African tech talent</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-5 text-neutral-800 md:text-neutral-700 max-w-xl text-base leading-relaxed"
          >
            We help companies scale with skilled remote teams — from engineers,
            designers to growth marketers. Fast vetting, transparent pricing, and
            ongoing upskilling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[#ED1E79] px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:brightness-95 transition-all"
            >
              Book a free consult
            </a>

            <a
              href="/for-employers"
              className="inline-flex items-center rounded-lg border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition"
            >
              For employers
            </a>
          </motion.div>

          {/* Trusted Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10"
          >
            <p className="text-xs text-neutral-500 uppercase tracking-wide">
              Trusted by
            </p>
            <div className="mt-4 flex items-center gap-6 flex-wrap">
              <Image
                src="/images/Automation.svg"
                alt="Company logo 1"
                width={90}
                height={32}
                className="opacity-70 hover:opacity-100 transition"
              />
              <Image
                src="/images/Basel-black.svg"
                alt="Company logo 2"
                width={90}
                height={32}
                className="opacity-70 hover:opacity-100 transition"
              />
              <Image
                src="/images/colorado-black.svg"
                alt="Company logo 3"
                width={90}
                height={32}
                className="opacity-70 hover:opacity-100 transition"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative order-first md:order-last h-64 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/hero.png"
            alt="African tech talent"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
