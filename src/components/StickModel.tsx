"use client";

import { motion } from "framer-motion";

interface StickModelProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
}

export default function StickModel({
  size = "lg",
  className = "",
  animate = false,
}: StickModelProps) {
  const sizes = {
    sm: { cap: "w-[54px] h-[26px]", body: "w-[54px] h-[120px]", brand: "text-[4.5px]", wrap: "" },
    md: { cap: "w-[88px] h-[42px]", body: "w-[88px] h-[222px]", brand: "text-[20px]", wrap: "" },
    lg: { cap: "w-[112px] h-[54px]", body: "w-[112px] h-[310px]", brand: "text-[24px]", wrap: "" },
  };

  const s = sizes[size];

  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
      }
    : {};

  return (
    <Wrapper
      className={`relative flex flex-col items-center ${className}`}
      style={{
        filter:
          "drop-shadow(0 35px 70px rgba(0,0,0,0.95)) drop-shadow(0 0 50px rgba(255,75,0,0.12))",
      }}
      {...wrapperProps}
    >
      {/* Cap */}
      <div
        className={`${s.cap} rounded-t-full rounded-b-[3px] relative`}
        style={{
          background:
            "linear-gradient(148deg, #262626 0%, #141414 45%, #1e1e1e 70%, #0f0f0f 100%)",
          boxShadow:
            "inset 0 3px 7px rgba(255,255,255,0.05), inset 0 -2px 4px rgba(0,0,0,0.35)",
        }}
      >
        {size === "lg" && (
          <span className="absolute bottom-3 left-0 right-0 text-center font-[family-name:var(--font-heading)] text-[7px] tracking-[0.45em] text-white/[0.22]">
            SHADOW
          </span>
        )}
        {/* Cap seam */}
        <div className="absolute -bottom-[3px] left-0 right-0 h-[5px] bg-[#050505] rounded-b-sm" />
      </div>

      {/* Body */}
      <div
        className={`${s.body} rounded-t-[3px] rounded-b-[10px] relative overflow-hidden`}
        style={{
          background:
            "linear-gradient(152deg, #1d1d1d 0%, #0e0e0e 30%, #1a1a1a 55%, #0c0c0c 80%, #0a0a0a 100%)",
          boxShadow:
            "inset -3px 0 10px rgba(0,0,0,0.55), inset 3px 0 12px rgba(255,255,255,0.03), inset 0 2px 4px rgba(255,255,255,0.05)",
        }}
      >
        {/* Left highlight */}
        <div
          className="absolute top-0 left-[5px] w-[2px] h-full rounded-sm"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 55%, transparent 100%)",
          }}
        />

        {/* Orange accent line top */}
        <div
          className="absolute top-7 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,80,0,0.32), rgba(255,80,0,0.32), transparent)",
          }}
        />

        {/* Subtle accent line bottom */}
        <div
          className="absolute bottom-20 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />

        {/* Label */}
        <div className="absolute top-[42px] left-0 right-0 px-2.5 text-center">
          <div
            className={`font-[family-name:var(--font-heading)] ${s.brand} font-bold tracking-[0.14em] text-white leading-none`}
            style={{ textShadow: "0 0 25px rgba(255,255,255,0.1)" }}
          >
            SHADOW
          </div>
          <div className="text-[6px] tracking-[0.28em] text-white/35 mt-1 uppercase">
            Seoul Performance SPF
          </div>
          <div
            className="w-[58px] h-px mx-auto my-2.5"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,80,0,0.38), transparent)",
            }}
          />
          <div
            className="font-[family-name:var(--font-heading)] text-[10.5px] tracking-[0.38em]"
            style={{
              color: "rgba(255,90,20,0.9)",
              textShadow: "0 0 14px rgba(255,75,0,0.4)",
            }}
          >
            SPF 50+
          </div>
          <div className="text-[7.5px] text-white/[0.18] mt-[5px] tracking-[0.12em]">
            서울 퍼포먼스
          </div>
        </div>

        {/* Bottom ring */}
        <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2">
          <div className="w-[54px] h-[54px] border border-white/10 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-1 border border-[rgba(255,80,0,0.22)] rounded-full" />
            <div className="text-center">
              <span className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-white block leading-none">
                50
              </span>
              <span className="text-[4.5px] tracking-[0.32em] text-[rgba(255,80,0,0.8)] block mt-px">
                PA++++
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
