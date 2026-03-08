"use client";

import { motion } from "framer-motion";

interface Stick {
  name: string;
  label: string;
  accent: string;
  accentGlow: string;
  height: string;
  capH: string;
}

const sticks: Stick[] = [
  {
    name: "Hydro",
    label: "HYDRO",
    accent: "rgb(60,130,255)",
    accentGlow: "rgba(60,130,255,0.35)",
    height: "h-[160px] sm:h-[210px]",
    capH: "h-[30px] sm:h-[40px]",
  },
  {
    name: "Original",
    label: "SHADOW",
    accent: "rgb(255,80,0)",
    accentGlow: "rgba(255,80,0,0.4)",
    height: "h-[160px] sm:h-[210px]",
    capH: "h-[30px] sm:h-[40px]",
  },
  {
    name: "Trail",
    label: "TRAIL",
    accent: "rgb(160,170,185)",
    accentGlow: "rgba(160,170,185,0.3)",
    height: "h-[160px] sm:h-[210px]",
    capH: "h-[30px] sm:h-[40px]",
  },
];

/* Each stick floats independently with different timing */
const floatVariants = {
  animate: (i: number) => ({
    y: [0, -8, 0, -5, 0],
    transition: {
      y: {
        duration: 4 + i * 0.6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  }),
};

/* Accent strip pulses */
const pulseVariants = {
  animate: (i: number) => ({
    opacity: [0.7, 1, 0.7],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2.5 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

/* Keychain swing */
const swingVariants = {
  animate: {
    rotate: [0, 3, 0, -3, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function StickCollection() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-24 lg:py-32">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-texture opacity-30" />

      {/* Ambient glow behind sticks — breathing */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 65%, rgba(255,80,0,0.06) 0%, transparent 70%)",
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
        <div className="flex items-end justify-center gap-5 sm:gap-8 lg:gap-12 mb-16 sm:mb-20">
          {sticks.map((stick, i) => (
            <motion.div
              key={stick.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              {/* Floating wrapper */}
              <motion.div
                className="relative flex flex-col items-center"
                variants={floatVariants}
                animate="animate"
                custom={i}
                style={{
                  filter: `drop-shadow(0 25px 50px rgba(0,0,0,0.8)) drop-shadow(0 0 30px ${stick.accentGlow})`,
                }}
              >
                {/* Cap */}
                <div
                  className={`w-[100px] sm:w-[140px] ${stick.capH} rounded-t-full rounded-b-[3px] relative`}
                  style={{
                    background: "linear-gradient(148deg, #262626 0%, #141414 45%, #1e1e1e 70%, #0f0f0f 100%)",
                    boxShadow: "inset 0 3px 7px rgba(255,255,255,0.05), inset 0 -2px 4px rgba(0,0,0,0.35)",
                  }}
                >
                  {/* Cap seam */}
                  <div
                    className="absolute -bottom-[2px] left-0 right-0 h-[4px] rounded-b-sm"
                    style={{
                      background: "#050505",
                    }}
                  />
                </div>

                {/* Body */}
                <div
                  className={`w-[100px] sm:w-[140px] ${stick.height} rounded-t-[3px] rounded-b-[10px] relative overflow-hidden`}
                  style={{
                    background: "linear-gradient(152deg, #1d1d1d 0%, #0e0e0e 30%, #1a1a1a 55%, #0c0c0c 80%, #0a0a0a 100%)",
                    boxShadow: "inset -3px 0 10px rgba(0,0,0,0.55), inset 3px 0 12px rgba(255,255,255,0.03), inset 0 2px 4px rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Left highlight */}
                  <div
                    className="absolute top-0 left-[4px] w-[1.5px] h-full rounded-sm"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 55%, transparent 100%)",
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
                    <span
                      className="font-[family-name:var(--font-heading)] text-[10px] sm:text-[12px] tracking-[0.45em] uppercase"
                      style={{
                        color: "rgba(255,255,255,0.15)",
                      }}
                    >
                      {stick.label}
                    </span>
                  </div>

                  {/* Colored accent strip at bottom — pulsing */}
                  <motion.div
                    className="absolute bottom-[10px] left-[12px] right-[12px] h-[3px] sm:h-[4px] rounded-full"
                    variants={pulseVariants}
                    animate="animate"
                    custom={i}
                    style={{
                      background: stick.accent,
                      boxShadow: `0 0 14px ${stick.accentGlow}, 0 0 6px ${stick.accentGlow}`,
                    }}
                  />
                </div>

              </motion.div>

              {/* Name label below */}
              <motion.div
                className="mt-4 sm:mt-5 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              >
                <span
                  className="font-[family-name:var(--font-heading)] text-[10px] sm:text-[11px] tracking-[0.28em] uppercase"
                  style={{
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  {stick.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Keychain — bottom left */}
        <motion.div
          className="flex items-start gap-10 sm:gap-14 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={swingVariants}
            animate="animate"
            style={{ transformOrigin: "top center" }}
          >
            {/* Chain */}
            <div className="flex flex-col items-center">
              <div
                className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full border-[2.5px] sm:border-[3px]"
                style={{ borderColor: "#3a3a3a", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.03)" }}
              />
              <div className="w-[2px] h-[8px] sm:h-[10px] -mt-[1px]" style={{ background: "linear-gradient(180deg, #3a3a3a, #2a2a2a)" }} />
              <div className="w-[8px] h-[10px] sm:w-[10px] sm:h-[12px] rounded-full border-[2px] -mt-[1px]" style={{ borderColor: "#333" }} />
              <div className="w-[2px] h-[6px] sm:h-[8px] -mt-[1px]" style={{ background: "linear-gradient(180deg, #2a2a2a, #3a3a3a)" }} />
            </div>
            {/* Mini dark stick */}
            <div
              className="flex flex-col items-center -mt-[1px]"
              style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.5)) drop-shadow(0 0 8px rgba(255,80,0,0.15))" }}
            >
              <div
                className="w-[42px] sm:w-[52px] h-[10px] sm:h-[12px] rounded-t-full rounded-b-[2px] relative"
                style={{ background: "linear-gradient(148deg, #262626 0%, #141414 45%, #0f0f0f 100%)", boxShadow: "inset 0 2px 4px rgba(255,255,255,0.05)" }}
              >
                <div className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-[#050505]" />
              </div>
              <div
                className="w-[42px] sm:w-[52px] h-[48px] sm:h-[58px] rounded-t-[2px] rounded-b-[5px] relative overflow-hidden"
                style={{ background: "linear-gradient(152deg, #1d1d1d 0%, #0e0e0e 30%, #0a0a0a 100%)", boxShadow: "inset -2px 0 6px rgba(0,0,0,0.5), inset 2px 0 8px rgba(255,255,255,0.02)" }}
              >
                <div className="absolute top-0 left-[3px] w-[1px] h-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)" }} />
                <div className="absolute top-[30%] left-0 right-0 text-center">
                  <span className="font-[family-name:var(--font-heading)] text-[3.5px] sm:text-[4px] tracking-[0.2em] text-white/[0.08] uppercase">
                    Shadow
                  </span>
                </div>
                <motion.div
                  className="absolute bottom-[3px] left-[6px] right-[6px] h-[2px] rounded-full"
                  variants={pulseVariants}
                  animate="animate"
                  custom={3}
                  style={{ background: "rgb(255,80,0)", boxShadow: "0 0 6px rgba(255,80,0,0.4)" }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="pt-6 sm:pt-8"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-[9px] tracking-[0.32em] text-[rgba(255,80,0,0.45)] uppercase mb-1.5 font-[family-name:var(--font-heading)]">
              Accessory
            </div>
            <div className="font-[family-name:var(--font-heading)] text-[16px] sm:text-[18px] font-bold text-white/80 leading-tight">
              Keychain
            </div>
            <div className="text-[8px] sm:text-[9px] tracking-[0.2em] text-white/20 uppercase mt-1.5">
              Mini SPF Stick &nbsp;·&nbsp; Clip Anywhere
            </div>
          </motion.div>
        </motion.div>

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
