"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ClaimBadge from "./ClaimBadge";

const claims = [
  "No White Cast",
  "No Drip Formula",
  "No Eye Sting",
  "Sweat Resistant",
  "Matte Finish",
  "Korean Patented",
  "Portable Stick",
  "SPF 50+ PA++++",
];

export default function Product() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-15, 15, -10, 10, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#070707] overflow-hidden py-24 lg:py-32"
    >
      {/* Background effects */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 100% at 0% 50%, rgba(255,80,0,0.055) 0%, transparent 55%),
            radial-gradient(ellipse 40% 80% at 100% 50%, rgba(0,100,255,0.035) 0%, transparent 50%)
          `,
        }}
      />
      <div className="absolute inset-0 scan-lines z-[5]" />

      <div className="relative z-10 max-w-7xl mx-auto px-10 sm:px-14 md:px-16 lg:px-[72px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT — Copy + Claims */}
          <div className="flex-1 max-w-xl">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-2.5 mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-[20px] h-px bg-[rgba(255,80,0,0.5)]" />
              <span className="text-[9px] tracking-[0.38em] text-[rgba(255,80,0,0.65)] uppercase">
                Performance Verified
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[46px] font-bold leading-[0.96] tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Built For
              <br />
              <span className="text-white/[0.14]">The </span>Long
              <br />
              Run
            </motion.h2>

            {/* Claims grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[360px]">
              {claims.map((claim, i) => (
                <ClaimBadge key={claim} label={claim} index={i} />
              ))}
            </div>
          </div>

          {/* RIGHT — 3D Rotating Stick */}
          <div className="relative flex items-center justify-center w-[360px] h-[480px]">
            {/* SPF ghost text */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-heading)] text-[150px] font-bold text-white/[0.018] leading-none pointer-events-none tracking-tight select-none">
              SPF
            </div>

            {/* Rotating stick */}
            <motion.div
              className="relative"
              style={{
                perspective: "800px",
              }}
            >
              <motion.div
                className="flex flex-col items-center"
                style={{
                  rotateY,
                  transformStyle: "preserve-3d",
                  filter:
                    "drop-shadow(0 20px 55px rgba(0,0,0,0.95)) drop-shadow(-8px 0 25px rgba(255,80,0,0.07))",
                }}
              >
                {/* Cap */}
                <div
                  className="w-[88px] h-[42px] rounded-t-full rounded-b-[3px] relative"
                  style={{
                    background:
                      "linear-gradient(135deg, #242424, #121212)",
                    boxShadow:
                      "inset 0 3px 6px rgba(255,255,255,0.05)",
                  }}
                />

                {/* Body */}
                <div
                  className="w-[88px] h-[222px] rounded-t-[3px] rounded-b-[8px] relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(155deg, #1e1e1e 0%, #0d0d0d 40%, #191919 70%, #0b0b0b 100%)",
                    boxShadow:
                      "inset -2px 0 8px rgba(0,0,0,0.5), inset 2px 0 10px rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Label */}
                  <div className="absolute top-[26px] left-0 right-0 text-center">
                    <div
                      className="font-[family-name:var(--font-heading)] text-[20px] font-bold tracking-[0.13em] text-white leading-none"
                      style={{
                        textShadow: "0 0 20px rgba(255,255,255,0.12)",
                      }}
                    >
                      SHADOW
                    </div>
                    <div className="text-[5px] tracking-[0.28em] text-white/[0.22] mt-[3px]">
                      서울 퍼포먼스 SPF
                    </div>
                    <div
                      className="w-[46px] h-px mx-auto mt-2 mb-2"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,80,0,0.42), transparent)",
                      }}
                    />
                    <div
                      className="font-[family-name:var(--font-heading)] text-[9px] tracking-[0.38em]"
                      style={{
                        color: "rgba(255,90,20,0.85)",
                        textShadow: "0 0 12px rgba(255,75,0,0.35)",
                      }}
                    >
                      SPF 50+
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
