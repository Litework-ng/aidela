"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="rounded-2xl border bg-gradient-to-r from-primary/10 to-cyan-100/10 p-8 md:p-12 text-center md:text-left"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-semibold text-neutral-900">
              Hire vetted talent or join our talent pool
            </h3>
            <p className="mt-3 text-neutral-600 max-w-xl">
              Book a free consult and tell us the roles you need — we’ll handle vetting, payroll, and retention.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-95 transition"
            >
              Book consult
            </a>
            <a
              href="/services"
              className="inline-flex items-center rounded-md border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition"
            >
              Explore services
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
