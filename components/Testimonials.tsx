const items = [
  {
    quote:
      "Aidela helped us scale our engineering team quickly. They matched us with skilled devs who integrated seamlessly.",
    name: "Sarah M",
    role: "CTO, FinTech Co"
  },
  {
    quote:
      "Great process — transparent and fast. We filled two critical full-stack roles in under 3 weeks.",
    name: "James A",
    role: "VP Engineering"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-10 text-neutral-900">
          What employers say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((t, idx) => (
            <blockquote
              key={idx}
              className="relative rounded-2xl bg-white p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-200"
            >
              {/* Decorative quote icon */}
              <span className="absolute -top-3 left-6 text-5xl text-blue-100 font-serif select-none">
                “
              </span>

              <p className="text-neutral-700 italic mt-4">
                {t.quote}
              </p>
              <footer className="mt-6">
                <div className="font-medium text-neutral-900">{t.name}</div>
                <div className="text-sm text-neutral-500">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
