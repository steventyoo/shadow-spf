"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {submitted ? (
        <motion.div
          className="flex items-center gap-2 text-[13px] text-[rgba(255,80,0,0.8)] tracking-wide"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className="w-4 h-4 border border-[rgba(255,80,0,0.5)] rounded-sm flex items-center justify-center text-[9px]">
            ✓
          </span>
          You&apos;re on the list. We&apos;ll be in touch.
        </motion.div>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-sm px-4 py-3 text-[13px] text-white/70 placeholder:text-white/20 tracking-wide outline-none focus:border-[rgba(255,80,0,0.3)] transition-colors duration-300 font-[family-name:var(--font-body)]"
          />
          <button
            type="submit"
            className="bg-[rgb(255,80,0)] hover:bg-[rgb(255,100,20)] text-white text-[10px] tracking-[0.28em] uppercase font-semibold px-6 py-3 rounded-sm transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Join Waitlist
          </button>
        </>
      )}
    </motion.form>
  );
}
