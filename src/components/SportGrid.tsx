"use client";

import { motion } from "framer-motion";

const sports = [
  {
    label: "Marathon",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="22" cy="5" r="3.5" fill="rgba(255,255,255,0.55)" />
        <path
          d="M20 10l-6 9 5 2.5-3.5 9"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M14 19l-5 2.5"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M25 17l3.5 2"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Cycling",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle
          cx="9"
          cy="26"
          r="6"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.6"
          fill="none"
        />
        <circle
          cx="27"
          cy="26"
          r="6"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M18 7l-4 12h8"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M14 19L9 26M14 19L27 26"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.6"
        />
        <circle cx="19" cy="6" r="2.5" fill="rgba(255,255,255,0.45)" />
      </svg>
    ),
  },
  {
    label: "HYROX",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect
          x="2"
          y="16"
          width="7"
          height="4.5"
          rx="2.5"
          fill="rgba(255,255,255,0.45)"
        />
        <rect
          x="27"
          y="16"
          width="7"
          height="4.5"
          rx="2.5"
          fill="rgba(255,255,255,0.45)"
        />
        <rect
          x="9"
          y="14.5"
          width="5"
          height="7"
          rx="1.2"
          fill="rgba(255,255,255,0.38)"
        />
        <rect
          x="22"
          y="14.5"
          width="5"
          height="7"
          rx="1.2"
          fill="rgba(255,255,255,0.38)"
        />
        <rect x="14" y="17" width="8" height="2.5" fill="rgba(255,255,255,0.32)" />
      </svg>
    ),
  },
  {
    label: "Trail",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M4 30l9-16 6 9 4-6 9 13H4z"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.6"
          fill="none"
          strokeLinejoin="round"
        />
        <circle
          cx="27"
          cy="8"
          r="3.5"
          stroke="rgba(255,210,0,0.55)"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M27 4.5V2.5M30.5 5.5l1.8-1.8M31.5 8h2"
          stroke="rgba(255,210,0,0.55)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function SportGrid() {
  return (
    <div className="grid grid-cols-2 gap-px bg-white/[0.04] rounded-md overflow-hidden">
      {sports.map((sport, i) => (
        <motion.div
          key={sport.label}
          className="relative bg-[#0c0c0c] flex flex-col items-center justify-center gap-4 py-14 sm:py-20 overflow-hidden group cursor-default"
          variants={tileVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={i}
        >
          {/* Subtle corner glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,80,0,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon */}
          <div className="opacity-55 group-hover:opacity-80 transition-opacity duration-300 scale-[1.8] sm:scale-[2.2]">
            {sport.icon}
          </div>

          {/* Label */}
          <span className="text-[8px] sm:text-[9px] tracking-[0.32em] text-white/30 uppercase group-hover:text-white/50 transition-colors duration-300">
            {sport.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
