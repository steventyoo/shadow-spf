"use client";

import { motion } from "framer-motion";
import SportGrid from "./SportGrid";

export default function Athletes() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-10 sm:px-14 md:px-16 lg:px-[72px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* LEFT — Copy */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              className="text-[8.5px] tracking-[0.3em] text-[rgba(255,80,0,0.6)] uppercase mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Built For
            </motion.div>

            <motion.h2
              className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.05] text-white/90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Where Light
              <br />
              Can&apos;t Follow
            </motion.h2>

            <motion.p
              className="text-[13px] text-white/25 leading-relaxed max-w-xs tracking-wide"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Engineered for athletes who train in direct sun — marathon
              runners, cyclists, HYROX competitors, and trail ultrarunners.
              One stick. Every discipline.
            </motion.p>
          </div>

          {/* RIGHT — Sport Grid */}
          <div className="flex-1 w-full lg:w-2/3">
            <SportGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
