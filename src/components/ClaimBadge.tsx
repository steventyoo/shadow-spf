"use client";

import { motion } from "framer-motion";

interface ClaimBadgeProps {
  label: string;
  index?: number;
}

export default function ClaimBadge({ label, index = 0 }: ClaimBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-2.5 text-[13px] text-white/[0.42] tracking-[0.05em]"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="w-[16px] h-[16px] border border-[rgba(255,80,0,0.38)] rounded-sm flex items-center justify-center shrink-0">
        <span className="text-[9px] text-[rgba(255,80,0,0.85)] leading-none">✓</span>
      </div>
      {label}
    </motion.div>
  );
}
