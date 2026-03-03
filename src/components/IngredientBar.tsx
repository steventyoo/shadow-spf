"use client";

import { motion } from "framer-motion";

interface IngredientBarProps {
  name: string;
  description: string;
  percentage: number;
  index?: number;
}

export default function IngredientBar({
  name,
  description,
  percentage,
  index = 0,
}: IngredientBarProps) {
  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
    >
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-[14px] text-white/[0.65] tracking-wide">
          {name}
        </span>
        <span className="font-[family-name:var(--font-heading)] text-[11px] text-[rgba(255,80,0,0.6)] tracking-[0.1em]">
          {percentage}%
        </span>
      </div>
      <div className="text-[9px] text-white/[0.22] tracking-[0.1em] uppercase mb-2">
        {description}
      </div>
      <div className="h-px bg-white/[0.06] relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full"
          style={{ background: "rgba(255,80,0,0.42)" }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 1.2,
            delay: 0.3 + index * 0.15,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        />
      </div>
    </motion.div>
  );
}
