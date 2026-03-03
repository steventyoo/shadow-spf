"use client";

import { motion } from "framer-motion";

const sticks = [
  {
    name: "Hydro",
    label: "HYDRO",
    accent: "rgb(60,130,255)",
    accentGlow: "rgba(60,130,255,0.35)",
    height: "h-[220px] sm:h-[280px]",
    capH: "h-[34px] sm:h-[44px]",
  },
  {
    name: "Original",
    label: "SHADOW",
    accent: "rgb(255,80,0)",
    accentGlow: "rgba(255,80,0,0.4)",
    height: "h-[270px] sm:h-[340px]",
    capH: "h-[40px] sm:h-[52px]",
  },
  {
    name: "Trail",
    label: "TRAIL",
    accent: "rgb(160,170,185)",
    accentGlow: "rgba(160,170,185,0.3)",
    height: "h-[220px] sm:h-[280px]",
    capH: "h-[34px] sm:h-[44px]",
  },
];

export default function StickCollection() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-24 lg:py-32">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-texture opacity-30" />

      {/* Ambient glow behind sticks */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 65%, rgba(255,80,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-12 sm:px-16 md:px-20 lg:px-24">
        {/* Header */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] text-white/90 mb-4">
            The Stick
            <br />
            Format
          </h2>
          <div className="text-[10px] tracking-[0.38em] text-[rgba(255,80,0,0.7)] uppercase">
            Starter Collection
          </div>
        </motion.div>

        {/* Sticks row */}
        <div className="flex items-end justify-center gap-6 sm:gap-10 lg:gap-14 mb-16 sm:mb-20">
          {sticks.map((stick, i) => (
            <motion.div
              key={stick.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              {/* Stick */}
              <div
                className="relative flex flex-col items-center"
                style={{
                  filter: `drop-shadow(0 25px 50px rgba(0,0,0,0.8)) drop-shadow(0 0 30px ${stick.accentGlow})`,
                }}
              >
                {/* Cap */}
                <div
                  className={`w-[60px] sm:w-[78px] ${stick.capH} rounded-t-full rounded-b-[3px] relative`}
                  style={{
                    background:
                      "linear-gradient(148deg, #262626 0%, #141414 45%, #1e1e1e 70%, #0f0f0f 100%)",
                    boxShadow:
                      "inset 0 3px 7px rgba(255,255,255,0.05), inset 0 -2px 4px rgba(0,0,0,0.35)",
                  }}
                >
                  {/* Cap seam */}
                  <div className="absolute -bottom-[2px] left-0 right-0 h-[4px] bg-[#050505] rounded-b-sm" />
                </div>

                {/* Body */}
                <div
                  className={`w-[60px] sm:w-[78px] ${stick.height} rounded-t-[3px] rounded-b-[8px] relative overflow-hidden`}
                  style={{
                    background:
                      "linear-gradient(152deg, #1d1d1d 0%, #0e0e0e 30%, #1a1a1a 55%, #0c0c0c 80%, #0a0a0a 100%)",
                    boxShadow:
                      "inset -3px 0 10px rgba(0,0,0,0.55), inset 3px 0 12px rgba(255,255,255,0.03), inset 0 2px 4px rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Left highlight */}
                  <div
                    className="absolute top-0 left-[4px] w-[1.5px] h-full rounded-sm"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 55%, transparent 100%)",
                    }}
                  />

                  {/* Vertical label text */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    <span className="font-[family-name:var(--font-heading)] text-[10px] sm:text-[12px] tracking-[0.45em] text-white/[0.15] uppercase">
                      {stick.label}
                    </span>
                  </div>

                  {/* Colored accent strip at bottom */}
                  <div
                    className="absolute bottom-[10px] left-[12px] right-[12px] h-[3px] sm:h-[4px] rounded-full"
                    style={{
                      background: stick.accent,
                      boxShadow: `0 0 12px ${stick.accentGlow}, 0 0 4px ${stick.accentGlow}`,
                    }}
                  />
                </div>
              </div>

              {/* Name label below */}
              <div className="mt-4 sm:mt-5 text-center">
                <span className="font-[family-name:var(--font-heading)] text-[10px] sm:text-[11px] tracking-[0.28em] text-white/30 uppercase">
                  {stick.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-white/[0.15] uppercase font-[family-name:var(--font-heading)]">
            SPF 50+ PA++++
          </span>
          <span className="flex-1 h-px bg-white/[0.04] mx-6" />
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[rgba(255,80,0,0.35)] font-[family-name:var(--font-heading)]">
            shadowspf.com
          </span>
        </motion.div>
      </div>
    </section>
  );
}
