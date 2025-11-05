"use client";
import { motion } from "framer-motion";
import { Code, Megaphone, Palette, Users } from "lucide-react";

const services = [
  {
    id: "software",
    title: "Software Development",
    description: "Full cycle engineers, front-end, backend, and mobile devs.",
    icon: Code,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Growth marketers, content creators and performance teams.",
    icon: Megaphone,
  },
  {
    id: "design",
    title: "Design & Product",
    description: "UX/UI designers, product strategists and researchers.",
    icon: Palette,
  },
  {
    id: "support",
    title: "Staff Augmentation",
    description: "Scale teams quickly with part- or full-time engineers.",
    icon: Users,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Our Services
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-neutral-200 p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-[#ED1E79]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ED1E79]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#ED1E79]" />
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900">{s.title}</h4>
                </div>

                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">{s.description}</p>

                <div className="mt-5">
                  <a
                    href={`/services/${s.id}`}
                    className="text-sm font-medium text-[#0649B5] hover:text-[#ED1E79] transition"
                  >
                    Learn more →
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
