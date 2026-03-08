"use client";

import { motion } from "framer-motion";

interface HunterStick {
  name: string;
  korean: string;
  accent: string;
  accentGlow: string;
  icon: React.ReactNode;
}

const hunters: HunterStick[] = [
  {
    name: "Blaze",
    korean: "블레이즈",
    accent: "rgb(255,60,30)",
    accentGlow: "rgba(255,60,30,0.4)",
    icon: (
      /* Fire emblem */
      <svg width="44" height="50" viewBox="0 0 44 50" fill="none">
        <path
          d="M22 2 C22 2, 36 16, 36 28 C36 36, 30 44, 22 44 C14 44, 8 36, 8 28 C8 16, 22 2, 22 2Z"
          fill="rgba(255,60,30,0.10)"
        />
        <path
          d="M22 18 C22 18, 30 26, 30 32 C30 36, 26 40, 22 40 C18 40, 14 36, 14 32 C14 26, 22 18, 22 18Z"
          fill="rgba(255,60,30,0.06)"
        />
        <path
          d="M22 28 C22 28, 26 32, 26 35 C26 37, 24 39, 22 39 C20 39, 18 37, 18 35 C18 32, 22 28, 22 28Z"
          fill="rgba(255,120,30,0.08)"
        />
      </svg>
    ),
  },
  {
    name: "Phantom",
    korean: "팬텀",
    accent: "rgb(160,60,255)",
    accentGlow: "rgba(160,60,255,0.45)",
    icon: (
      /* Ghost/spirit emblem */
      <svg width="42" height="50" viewBox="0 0 42 50" fill="none">
        <path
          d="M21 4 C10 4, 4 14, 4 24 C4 34, 4 44, 4 44 L10 38 L16 44 L21 38 L26 44 L32 38 L38 44 C38 44, 38 34, 38 24 C38 14, 32 4, 21 4Z"
          fill="rgba(160,60,255,0.08)"
        />
        <circle cx="15" cy="22" r="3" fill="rgba(160,60,255,0.12)" />
        <circle cx="27" cy="22" r="3" fill="rgba(160,60,255,0.12)" />
        <path d="M16 30 Q21 34, 26 30" stroke="rgba(160,60,255,0.10)" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: "Frost",
    korean: "프로스트",
    accent: "rgb(80,200,255)",
    accentGlow: "rgba(80,200,255,0.4)",
    icon: (
      /* Ice crystal emblem */
      <svg width="44" height="50" viewBox="0 0 44 50" fill="none">
        <line x1="22" y1="4" x2="22" y2="46" stroke="rgba(80,200,255,0.12)" strokeWidth="2" />
        <line x1="6" y1="14" x2="38" y2="36" stroke="rgba(80,200,255,0.10)" strokeWidth="2" />
        <line x1="38" y1="14" x2="6" y2="36" stroke="rgba(80,200,255,0.10)" strokeWidth="2" />
        <line x1="16" y1="6" x2="22" y2="12" stroke="rgba(80,200,255,0.08)" strokeWidth="1.5" />
        <line x1="28" y1="6" x2="22" y2="12" stroke="rgba(80,200,255,0.08)" strokeWidth="1.5" />
        <line x1="16" y1="44" x2="22" y2="38" stroke="rgba(80,200,255,0.08)" strokeWidth="1.5" />
        <line x1="28" y1="44" x2="22" y2="38" stroke="rgba(80,200,255,0.08)" strokeWidth="1.5" />
        <circle cx="22" cy="25" r="6" fill="rgba(80,200,255,0.06)" stroke="rgba(80,200,255,0.10)" strokeWidth="1" />
      </svg>
    ),
  },
];

const STICK_W = "w-[120px] sm:w-[150px]";
const STICK_H = "h-[135px] sm:h-[164px]";
const CAP_H = "h-[26px] sm:h-[32px]";

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -7, 0, -4, 0],
    transition: {
      y: {
        duration: 4 + i * 0.6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  }),
};

const pulseVariants = {
  animate: (i: number) => ({
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2.5 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

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

export default function DemonHunters() {
  return (
    <section className="relative w-full bg-[#f5f2ee] overflow-hidden py-24 lg:py-32">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.012) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
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
            <span className="w-[20px] h-px bg-[rgba(160,60,255,0.4)]" />
            <span className="text-[9px] tracking-[0.38em] text-[rgba(160,60,255,0.6)] uppercase">
              Lil&apos; Shadow × Original IP
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] text-[#1a1a1a] mb-3">
            K-Pop
            <br />
            <span className="text-[rgba(160,60,255,0.7)]">Demon Hunters</span>
          </h2>
          <p className="text-[11px] tracking-[0.2em] text-[#1a1a1a]/30 uppercase">
            케이팝 데몬 헌터즈 &nbsp;·&nbsp; SPF 50+ PA++++ &nbsp;·&nbsp; Own Your Power
          </p>
        </motion.div>

        {/* Sticks row */}
        <div className="flex items-end justify-center gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {hunters.map((hunter, i) => (
            <motion.div
              key={hunter.name}
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
                  filter: `drop-shadow(0 20px 40px rgba(0,0,0,0.08)) drop-shadow(0 0 25px ${hunter.accentGlow})`,
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

                  {/* Character emblem */}
                  <div className="absolute top-[14%] left-1/2 -translate-x-1/2">
                    {hunter.icon}
                  </div>

                  {/* Hunter name label */}
                  <div className="absolute bottom-[32px] left-0 right-0 text-center">
                    <span className="font-[family-name:var(--font-heading)] text-[5.5px] sm:text-[6.5px] tracking-[0.25em] text-[#1a1a1a]/[0.10] uppercase">
                      {hunter.korean}
                    </span>
                  </div>

                  {/* Colored accent strip — pulsing */}
                  <motion.div
                    className="absolute bottom-[8px] left-[14px] right-[14px] h-[3px] sm:h-[3.5px] rounded-full"
                    variants={pulseVariants}
                    animate="animate"
                    custom={i}
                    style={{
                      background: hunter.accent,
                      boxShadow: `0 0 10px ${hunter.accentGlow}, 0 0 4px ${hunter.accentGlow}`,
                    }}
                  />
                </div>
              </motion.div>

              {/* Name below */}
              <motion.div
                className="mt-4 sm:mt-5 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              >
                <span className="font-[family-name:var(--font-heading)] text-[10px] sm:text-[11px] tracking-[0.28em] text-[#1a1a1a]/25 uppercase">
                  {hunter.name}
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
            <div className="flex flex-col items-center">
              <div
                className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full border-[2.5px] sm:border-[3px]"
                style={{ borderColor: "#c8c0b8", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.08), 0 1px 2px rgba(255,255,255,0.5)" }}
              />
              <div className="w-[2px] h-[8px] sm:h-[10px] -mt-[1px]" style={{ background: "linear-gradient(180deg, #c8c0b8, #b8b0a8)" }} />
              <div className="w-[8px] h-[10px] sm:w-[10px] sm:h-[12px] rounded-full border-[2px] -mt-[1px]" style={{ borderColor: "#c0b8b0" }} />
              <div className="w-[2px] h-[6px] sm:h-[8px] -mt-[1px]" style={{ background: "linear-gradient(180deg, #b8b0a8, #c8c0b8)" }} />
            </div>
            <div
              className="flex flex-col items-center -mt-[1px]"
              style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.08)) drop-shadow(0 0 8px rgba(160,60,255,0.15))" }}
            >
              <div
                className="w-[42px] sm:w-[52px] h-[10px] sm:h-[12px] rounded-t-full rounded-b-[2px] relative"
                style={{ background: "linear-gradient(148deg, #ffffff 0%, #f7f5f2 45%, #f0edea 100%)", boxShadow: "inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.04)" }}
              >
                <div className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-[#e8e5e1]" />
              </div>
              <div
                className="w-[42px] sm:w-[52px] h-[48px] sm:h-[58px] rounded-t-[2px] rounded-b-[5px] relative overflow-hidden"
                style={{ background: "linear-gradient(152deg, #ffffff 0%, #f8f6f3 30%, #f2f0ed 80%, #edeae7 100%)", boxShadow: "inset -2px 0 6px rgba(0,0,0,0.03), inset 2px 0 8px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.06)" }}
              >
                <div className="absolute top-0 left-[3px] w-[1px] h-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, transparent 100%)" }} />
                <div className="absolute top-[30%] left-0 right-0 text-center">
                  <span className="font-[family-name:var(--font-heading)] text-[3px] sm:text-[3.5px] tracking-[0.15em] text-[#1a1a1a]/[0.10] uppercase">
                    Demon Hunters
                  </span>
                </div>
                <motion.div
                  className="absolute bottom-[3px] left-[6px] right-[6px] h-[2px] rounded-full"
                  variants={pulseVariants}
                  animate="animate"
                  custom={3}
                  style={{ background: "rgb(160,60,255)", boxShadow: "0 0 6px rgba(160,60,255,0.4)" }}
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
            <div className="text-[9px] tracking-[0.32em] text-[rgba(160,60,255,0.45)] uppercase mb-1.5 font-[family-name:var(--font-heading)]">
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
            Original IP · No License Required
          </span>
          <span className="flex-1 h-px bg-[#1a1a1a]/[0.06] mx-6" />
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[rgba(160,60,255,0.3)] font-[family-name:var(--font-heading)]">
            shadowspf.com/demon-hunters
          </span>
        </motion.div>
      </div>
    </section>
  );
}
