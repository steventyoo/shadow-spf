"use client";

import { motion } from "framer-motion";
import StickModel from "./StickModel";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const attrs = [
  "No White Cast",
  "No Drip  ·  No Sting",
  "Sweat-Proof Stick Format",
  "HYROX  ·  Marathon  ·  Trail",
];

const stats = [
  { value: "50+", label: "SPF Rating" },
  { value: "PA++++", label: "UVA Protection", small: true },
  { value: "0g", label: "White Cast" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-[#080808] overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 80% at 20% 50%, rgba(255,75,0,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 45% 60% at 80% 30%, rgba(0,170,255,0.05) 0%, transparent 55%),
            radial-gradient(ellipse 70% 30% at 50% 100%, rgba(40,0,80,0.15) 0%, transparent 60%)
          `,
        }}
      />

      {/* Diagonal hatch */}
      <div className="absolute top-0 right-0 w-[460px] h-[460px] opacity-[0.045] diag-hatch" />

      {/* Scan lines */}
      <div className="absolute inset-0 scan-lines z-[40]" />

      {/* LEFT COPY */}
      <motion.div
        className="absolute left-6 sm:left-12 md:left-16 lg:left-[72px] top-1/2 -translate-y-1/2 z-20 max-w-[320px]"
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-2.5 mb-5"
          variants={fadeUp}
          custom={0}
        >
          <span className="w-[22px] h-px bg-[rgba(255,80,0,0.6)] shrink-0" />
          <span className="text-[9.5px] tracking-[0.38em] text-[rgba(255,80,0,0.8)] uppercase">
            Seoul Performance
          </span>
        </motion.div>

        {/* Brand name */}
        <motion.h1
          className="font-[family-name:var(--font-heading)] text-6xl sm:text-7xl lg:text-[86px] font-bold leading-[0.88] tracking-tight text-white mb-3.5"
          style={{ textShadow: "0 0 100px rgba(255,255,255,0.06)" }}
          variants={fadeUp}
          custom={1}
        >
          SHADOW
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="text-[11px] tracking-[0.22em] text-white/30 uppercase leading-[1.9] mb-9"
          variants={fadeUp}
          custom={2}
        >
          Korean Patented Formula
          <br />
          SPF 50+ &nbsp;PA++++
          <br />
          Performance UV Defense
        </motion.div>

        {/* Attributes */}
        <motion.div className="flex flex-col gap-2.5" variants={fadeUp} custom={3}>
          {attrs.map((attr) => (
            <div
              key={attr}
              className="flex items-center gap-2.5 text-[10.5px] text-white/[0.48] tracking-[0.08em]"
            >
              <div className="w-1 h-1 rounded-full bg-[rgba(255,80,0,0.75)] shrink-0" />
              {attr}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* CENTER STICK */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[15]">
        {/* Glow bg */}
        <div
          className="absolute -inset-[60px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,75,0,0.08) 0%, transparent 65%)",
          }}
        />
        {/* Floor shadow */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-[48%] w-[220px] h-[22px] blur-[18px] z-[3]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,0,0,0.65) 0%, transparent 70%)",
          }}
        />
        <motion.div
          style={{ transform: "rotate(-8deg)" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
        >
          <StickModel size="lg" />
        </motion.div>
      </div>

      {/* RIGHT COPY */}
      <motion.div
        className="absolute right-6 sm:right-12 md:right-16 lg:right-[72px] top-1/2 -translate-y-1/2 z-20 text-right max-w-[200px] hidden md:block"
        initial="hidden"
        animate="visible"
      >
        {/* SPF ghost */}
        <motion.div
          className="font-[family-name:var(--font-heading)] text-[100px] font-bold text-white/[0.028] leading-none -mb-[18px] tracking-tight"
          variants={fadeUp}
          custom={1}
        >
          50+
        </motion.div>

        <motion.div
          className="text-[10px] text-white/[0.18] tracking-[0.18em] mb-2.5"
          variants={fadeUp}
          custom={2}
        >
          서울 포뮬라
        </motion.div>

        <motion.div
          className="inline-block border border-[rgba(255,80,0,0.28)] px-3.5 py-1.5 text-[8.5px] tracking-[0.32em] text-[rgba(255,80,0,0.7)] uppercase mb-5"
          variants={fadeUp}
          custom={3}
        >
          Korean Patented
        </motion.div>

        <motion.div className="flex flex-col gap-3.5 items-end" variants={fadeUp} custom={4}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-[family-name:var(--font-heading)] text-[30px] font-bold text-white leading-none">
                {stat.small ? (
                  <>
                    PA<span className="text-[18px]">++++</span>
                  </>
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-[8px] tracking-[0.3em] text-white/[0.28] uppercase mt-px">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* BOTTOM BAR */}
      <motion.div
        className="absolute bottom-7 left-6 sm:left-12 md:left-16 lg:left-[72px] right-6 sm:right-12 md:right-16 lg:right-[72px] flex items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-[8.5px] tracking-[0.3em] text-white/[0.18] uppercase whitespace-nowrap">
          Shadow SPF — Seoul, Korea
        </span>
        <span className="flex-1 h-px bg-white/[0.055] mx-4" />
        <span className="text-[8.5px] tracking-[0.3em] text-white/[0.18] uppercase whitespace-nowrap hidden sm:block">
          Performance UV Defense — Stick Format
        </span>
        <span className="flex-1 h-px bg-white/[0.055] mx-4 hidden sm:block" />
        <span className="text-[8.5px] tracking-[0.3em] text-white/[0.18] uppercase whitespace-nowrap">
          Where Light Can&apos;t Follow
        </span>
      </motion.div>
    </section>
  );
}
