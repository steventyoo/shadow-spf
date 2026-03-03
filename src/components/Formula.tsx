"use client";

import { motion } from "framer-motion";
import IngredientBar from "./IngredientBar";

const ingredients = [
  {
    name: "Zinc Oxide",
    description: "Broad Spectrum Shield",
    percentage: 85,
  },
  {
    name: "Tinosorb M",
    description: "UVA / UVB Filter",
    percentage: 72,
  },
  {
    name: "Centella Asiatica",
    description: "Korean Skin Repair Complex",
    percentage: 60,
  },
  {
    name: "Niacinamide 10%",
    description: "Anti-Oxidant Defense",
    percentage: 48,
  },
  {
    name: "Hyaluronic Acid",
    description: "Hydration Lock Technology",
    percentage: 55,
  },
];

export default function Formula() {
  return (
    <section className="relative w-full bg-[#0c0c0c] overflow-hidden py-24 lg:py-32">
      {/* Glow */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,80,0,0.1) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-[72px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* LEFT — Header + Mini Stick */}
          <div className="flex-1">
            {/* Eyebrow */}
            <motion.div
              className="text-[8.5px] tracking-[0.38em] text-[rgba(255,80,0,0.6)] uppercase mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Formula
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] text-white/[0.88] mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Korean
              <br />
              Patented
              <br />
              UV Complex
            </motion.h2>

            {/* Mini stick illustration */}
            <motion.div
              className="flex flex-col items-center w-fit"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="w-[54px] h-[26px] rounded-t-full rounded-b-sm"
                style={{
                  background: "linear-gradient(135deg, #222, #111)",
                  boxShadow: "inset 0 2px 4px rgba(255,255,255,0.04)",
                }}
              />
              <div
                className="w-[54px] h-[120px] rounded-t-sm rounded-b-[5px] relative"
                style={{
                  background: "linear-gradient(135deg, #1c1c1c, #0a0a0a)",
                  boxShadow:
                    "-3px 4px 18px rgba(0,0,0,0.8), inset 2px 0 5px rgba(255,255,255,0.03)",
                }}
              >
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-[family-name:var(--font-heading)] text-[4.5px] tracking-[0.28em] text-white/25"
                >
                  SHADOW
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Ingredient Bars */}
          <div className="flex-1 max-w-lg">
            <motion.div
              className="text-[8px] tracking-[0.38em] text-[rgba(255,80,0,0.55)] uppercase mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Active Ingredients
            </motion.div>

            {ingredients.map((ingredient, i) => (
              <IngredientBar
                key={ingredient.name}
                name={ingredient.name}
                description={ingredient.description}
                percentage={ingredient.percentage}
                index={i}
              />
            ))}

            {/* Korean patent badge */}
            <motion.div
              className="mt-8 inline-block border border-[rgba(255,80,0,0.2)] px-4 py-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-[8px] tracking-[0.32em] text-[rgba(255,80,0,0.5)] uppercase">
                한국 특허 포뮬라 &nbsp;·&nbsp; Korean Patent No. KR-2024-0892
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
