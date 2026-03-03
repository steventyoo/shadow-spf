"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Only sunscreen that doesn't drip into my eyes at mile 20. Game changer.",
    name: "Sarah K.",
    sport: "Marathon Runner",
    detail: "Boston Qualifier",
  },
  {
    quote: "Wore it through a full HYROX race. Zero reapplication. Zero white cast on my kit.",
    name: "James T.",
    sport: "HYROX Athlete",
    detail: "PFT Pro",
  },
  {
    quote: "Finally a stick that works on 5-hour rides in direct sun. Matte finish, no grease.",
    name: "Mia L.",
    sport: "Cyclist",
    detail: "Cat 2 Road",
  },
  {
    quote: "Used it on a 50K trail in Joshua Tree. Sweat-proof is an understatement.",
    name: "David R.",
    sport: "Trail Runner",
    detail: "Ultramarathoner",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#070707] overflow-hidden py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-12 sm:px-16 md:px-20 lg:px-24">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[20px] h-px bg-[rgba(255,80,0,0.5)]" />
            <span className="text-[9px] tracking-[0.38em] text-[rgba(255,80,0,0.65)] uppercase">
              Athletes Say
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] text-white/90">
            Tested in
            <br />
            the Field
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-[#0c0c0c] border border-white/[0.04] rounded-md p-6 sm:p-8 relative group hover:border-[rgba(255,80,0,0.1)] transition-colors duration-500"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Quote */}
              <div className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed mb-6 font-light">
                &ldquo;{t.quote}&rdquo;
              </div>

              {/* Attribution */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[12px] text-white/70 font-medium tracking-wide">
                    {t.name}
                  </div>
                  <div className="text-[8px] tracking-[0.2em] text-white/20 uppercase mt-0.5">
                    {t.sport} &nbsp;·&nbsp; {t.detail}
                  </div>
                </div>
                {/* Star rating */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="rgba(255,80,0,0.6)"
                    >
                      <path d="M6 1l1.545 3.13L11 4.635 8.5 7.07l.59 3.43L6 8.885 2.91 10.5l.59-3.43L1 4.635l3.455-.505L6 1z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
