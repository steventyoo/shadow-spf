"use client";

import { motion } from "framer-motion";

const claims = [
  { value: "0", label: "White Cast" },
  { value: "0", label: "Drip" },
  { value: "0", label: "Eye Sting" },
  { value: "0", label: "Microplastics" },
  { value: "0", label: "Parabens" },
];

export default function ZeroClaims() {
  return (
    <section className="relative w-full bg-[#0a0a0a] border-y border-white/[0.04] overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 sm:px-14 md:px-16 lg:px-[72px] py-16 sm:py-20">
        <motion.div
          className="flex items-center gap-2.5 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-[20px] h-px bg-[rgba(255,80,0,0.5)]" />
          <span className="text-[9px] tracking-[0.38em] text-[rgba(255,80,0,0.65)] uppercase">
            Clean Formula
          </span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6">
          {claims.map((claim, i) => (
            <motion.div
              key={claim.label}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="font-[family-name:var(--font-heading)] text-[56px] sm:text-[68px] font-bold text-white leading-none mb-1">
                {claim.value}
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.28em] text-white/25 uppercase">
                {claim.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
