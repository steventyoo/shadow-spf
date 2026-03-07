"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface KidStick {
  name: string;
  collab: string;
  accent: string;
  accentGlow: string;
  image?: string;
  icon?: React.ReactNode;
}

const kidSticks: KidStick[] = [
  {
    name: "Mickey",
    collab: "Mickey × Shadow",
    accent: "rgb(230,40,40)",
    accentGlow: "rgba(230,40,40,0.3)",
    image: "/kids/mickey.png",
  },
  {
    name: "Pikachu",
    collab: "Pikachu × Shadow",
    accent: "rgb(255,203,5)",
    accentGlow: "rgba(255,203,5,0.35)",
    image: "/kids/pikachu.png",
  },
  {
    name: "Hello Kitty",
    collab: "Hello Kitty × Shadow",
    accent: "rgb(255,130,160)",
    accentGlow: "rgba(255,130,160,0.3)",
    image: "/kids/hellokitty.png",
  },
];

/* Touchland-size proportions + 1 inch taller (~25px) */
const STICK_W = "w-[120px] sm:w-[150px]";
const STICK_H = "h-[135px] sm:h-[164px]";
const CAP_H = "h-[26px] sm:h-[32px]";

/* Gentle float */
const floatVariants = {
  animate: (i: number) => ({
    y: [0, -6, 0, -4, 0],
    transition: {
      y: {
        duration: 4.5 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  }),
};

/* Accent strip pulse */
const pulseVariants = {
  animate: (i: number) => ({
    opacity: [0.65, 1, 0.65],
    transition: {
      duration: 2.8 + i * 0.3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

/* Keychain gentle swing */
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

export default function KidsCollection() {
  return (
    <section className="relative w-full bg-[#f5f2ee] overflow-hidden py-24 lg:py-32">
      {/* Subtle warm texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
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
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[20px] h-px bg-[rgba(255,80,0,0.4)]" />
            <span className="text-[9px] tracking-[0.38em] text-[rgba(255,80,0,0.6)] uppercase">
              For Little Ones
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] text-[#1a1a1a] mb-3">
            Lil&apos;
            <br />
            Shadow
          </h2>
          <p className="text-[11px] tracking-[0.2em] text-[#1a1a1a]/30 uppercase">
            서울 키즈 퍼포먼스 &nbsp;·&nbsp; SPF 50+ PA++++ &nbsp;·&nbsp; Pediatrician Tested
          </p>
        </motion.div>

        {/* Sticks row */}
        <div className="flex items-end justify-center gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {kidSticks.map((stick, i) => (
            <motion.div
              key={stick.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
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
                  filter: `drop-shadow(0 20px 40px rgba(0,0,0,0.08)) drop-shadow(0 0 25px ${stick.accentGlow})`,
                }}
              >
                {/* Cap */}
                <div
                  className={`${STICK_W} ${CAP_H} rounded-t-full rounded-b-[3px] relative`}
                  style={{
                    background:
                      "linear-gradient(148deg, #ffffff 0%, #f7f5f2 45%, #faf8f6 70%, #f0edea 100%)",
                    boxShadow:
                      "inset 0 3px 7px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Cap seam */}
                  <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-[#e8e5e1] rounded-b-sm" />
                </div>

                {/* Body */}
                <div
                  className={`${STICK_W} ${STICK_H} rounded-t-[3px] rounded-b-[10px] relative overflow-hidden`}
                  style={{
                    background:
                      "linear-gradient(152deg, #ffffff 0%, #f8f6f3 30%, #faf8f6 55%, #f2f0ed 80%, #edeae7 100%)",
                    boxShadow:
                      "inset -3px 0 10px rgba(0,0,0,0.03), inset 3px 0 12px rgba(255,255,255,0.6), inset 0 2px 4px rgba(255,255,255,0.5), 0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Left highlight */}
                  <div
                    className="absolute top-0 left-[4px] w-[1.5px] h-full rounded-sm"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 55%, transparent 100%)",
                    }}
                  />

                  {/* Character image or icon */}
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center">
                    {stick.image ? (
                      <Image
                        src={stick.image}
                        alt={stick.name}
                        width={60}
                        height={60}
                        className="object-contain opacity-[0.15] mix-blend-multiply"
                      />
                    ) : (
                      stick.icon
                    )}
                  </div>

                  {/* Collab label */}
                  <div className="absolute bottom-[32px] left-0 right-0 text-center">
                    <span className="font-[family-name:var(--font-heading)] text-[5.5px] sm:text-[6.5px] tracking-[0.25em] text-[#1a1a1a]/[0.12] uppercase">
                      {stick.collab}
                    </span>
                  </div>

                  {/* Colored accent strip at bottom — pulsing */}
                  <motion.div
                    className="absolute bottom-[8px] left-[14px] right-[14px] h-[3px] sm:h-[3.5px] rounded-full"
                    variants={pulseVariants}
                    animate="animate"
                    custom={i}
                    style={{
                      background: stick.accent,
                      boxShadow: `0 0 10px ${stick.accentGlow}, 0 0 4px ${stick.accentGlow}`,
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
                <span className="font-[family-name:var(--font-heading)] text-[10px] sm:text-[11px] tracking-[0.28em] text-[#1a1a1a]/25 uppercase">
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
          {/* Keychain unit */}
          <motion.div
            className="flex flex-col items-center"
            variants={swingVariants}
            animate="animate"
            style={{ transformOrigin: "top center" }}
          >
            {/* Chain links */}
            <div className="flex flex-col items-center">
              {/* Ring */}
              <div
                className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full border-[2.5px] sm:border-[3px]"
                style={{
                  borderColor: "#c8c0b8",
                  background: "transparent",
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.08), 0 1px 2px rgba(255,255,255,0.5)",
                }}
              />
              {/* Chain link 1 */}
              <div
                className="w-[2px] h-[8px] sm:h-[10px] -mt-[1px]"
                style={{
                  background: "linear-gradient(180deg, #c8c0b8, #b8b0a8)",
                  boxShadow: "0 0 2px rgba(0,0,0,0.1)",
                }}
              />
              {/* Chain link 2 — oval */}
              <div
                className="w-[8px] h-[10px] sm:w-[10px] sm:h-[12px] rounded-full border-[2px] -mt-[1px]"
                style={{
                  borderColor: "#c0b8b0",
                  background: "transparent",
                }}
              />
              {/* Chain link 3 */}
              <div
                className="w-[2px] h-[6px] sm:h-[8px] -mt-[1px]"
                style={{
                  background: "linear-gradient(180deg, #b8b0a8, #c8c0b8)",
                }}
              />
            </div>

            {/* Mini stick */}
            <div
              className="flex flex-col items-center -mt-[1px]"
              style={{
                filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.08)) drop-shadow(0 0 8px rgba(255,80,0,0.12))",
              }}
            >
              {/* Mini cap */}
              <div
                className="w-[42px] sm:w-[52px] h-[10px] sm:h-[12px] rounded-t-full rounded-b-[2px] relative"
                style={{
                  background: "linear-gradient(148deg, #ffffff 0%, #f7f5f2 45%, #f0edea 100%)",
                  boxShadow: "inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.04)",
                }}
              >
                <div className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-[#e8e5e1]" />
              </div>
              {/* Mini body */}
              <div
                className="w-[42px] sm:w-[52px] h-[48px] sm:h-[58px] rounded-t-[2px] rounded-b-[5px] relative overflow-hidden"
                style={{
                  background: "linear-gradient(152deg, #ffffff 0%, #f8f6f3 30%, #f2f0ed 80%, #edeae7 100%)",
                  boxShadow: "inset -2px 0 6px rgba(0,0,0,0.03), inset 2px 0 8px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.06)",
                }}
              >
                {/* Left highlight */}
                <div
                  className="absolute top-0 left-[3px] w-[1px] h-full"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, transparent 100%)",
                  }}
                />
                {/* Mini label */}
                <div className="absolute top-[30%] left-0 right-0 text-center">
                  <span className="font-[family-name:var(--font-heading)] text-[3.5px] sm:text-[4px] tracking-[0.2em] text-[#1a1a1a]/[0.10] uppercase">
                    Lil&apos; Shadow
                  </span>
                </div>
                {/* Mini accent strip — orange */}
                <motion.div
                  className="absolute bottom-[3px] left-[6px] right-[6px] h-[2px] rounded-full"
                  variants={pulseVariants}
                  animate="animate"
                  custom={3}
                  style={{
                    background: "rgb(255,80,0)",
                    boxShadow: "0 0 6px rgba(255,80,0,0.3)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Keychain label */}
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
            <div className="font-[family-name:var(--font-heading)] text-[16px] sm:text-[18px] font-bold text-[#1a1a1a]/80 leading-tight">
              Keychain
            </div>
            <div className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#1a1a1a]/20 uppercase mt-1.5">
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
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#1a1a1a]/[0.12] uppercase font-[family-name:var(--font-heading)]">
            SPF 50+ PA++++ · Pediatrician Tested
          </span>
          <span className="flex-1 h-px bg-[#1a1a1a]/[0.06] mx-6" />
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[rgba(255,80,0,0.3)] font-[family-name:var(--font-heading)]">
            shadowspf.com/kids
          </span>
        </motion.div>
      </div>
    </section>
  );
}
