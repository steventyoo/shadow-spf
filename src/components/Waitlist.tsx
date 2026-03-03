"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function Waitlist() {
  return (
    <section className="relative w-full bg-[#050505] overflow-hidden py-28 lg:py-40">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,80,0,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-texture opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-12 sm:px-16 md:px-20 lg:px-24 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          className="text-[9px] tracking-[0.38em] text-[rgba(255,80,0,0.6)] uppercase mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Coming Soon
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[0.95] tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Be First.
          <br />
          <span className="text-[rgb(255,80,0)]">Run Harder.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-[13px] text-white/25 tracking-wide max-w-sm mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join the waitlist for early access to SHADOW SPF. Limited first batch
          — Seoul to your door.
        </motion.p>

        {/* Form */}
        <WaitlistForm />
      </div>
    </section>
  );
}
