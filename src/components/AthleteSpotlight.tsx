"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socials = [
  { label: "Instagram", handle: "@mattchoi_6", url: "https://www.instagram.com/mattchoi_6/?hl=en" },
  { label: "TikTok", handle: "@mattchoi6", url: "https://tiktok.com/@mattchoi6" },
  { label: "YouTube", handle: "Matt Choi", url: "https://youtube.com/@mattchoi6" },
];

const stats = [
  { value: "500K+", label: "Followers" },
  { value: "100mi", label: "Ultra Finisher" },
  { value: "D1", label: "Athlete" },
];

export default function AthleteSpotlight() {
  return (
    <section className="relative w-full bg-[#060606] overflow-hidden py-24 lg:py-32">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 30% 40%, rgba(255,80,0,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-12 sm:px-16 md:px-20 lg:px-24">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[20px] h-px bg-[rgba(255,80,0,0.5)]" />
            <span className="text-[9px] tracking-[0.38em] text-[rgba(255,80,0,0.65)] uppercase">
              Athlete
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.05] text-white/90">
            Matt Choi
          </h2>
          <p className="text-[11px] tracking-[0.2em] text-white/20 uppercase mt-2">
            Runner &nbsp;·&nbsp; Creator &nbsp;·&nbsp; Ultramarathoner
          </p>
        </motion.div>

        {/* Image grid — hero + 4 sun images */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-16">
          {/* Large hero image — walking on grass in the sun */}
          <motion.div
            className="flex-1 relative aspect-[4/3] rounded-md overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Image
              src="/athletes/matt-choi-hero.jpg"
              alt="Matt Choi walking in the sun"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent opacity-60" />
            {/* Bottom label */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="font-[family-name:var(--font-heading)] text-[14px] font-bold tracking-[0.1em] text-white/80">
                  MATT CHOI
                </div>
                <div className="text-[8px] tracking-[0.28em] text-white/30 uppercase">
                  Marathon · Ultra · Golf
                </div>
              </div>
              <div className="text-[8px] tracking-[0.2em] text-[rgba(255,80,0,0.5)] uppercase">
                Shadow Athlete
              </div>
            </div>
          </motion.div>

          {/* Right column — 2×2 grid of sun images */}
          <div className="lg:w-[320px] grid grid-cols-2 gap-3">
            {/* Golden hour — Running Club Member tank */}
            <motion.div
              className="relative aspect-[3/4] rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image
                src="/athletes/matt-choi-sun-profile.png"
                alt="Matt Choi golden hour training"
                fill
                className="object-cover"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/40 to-transparent" />
            </motion.div>

            {/* Treadmill / sled — dramatic dark shot */}
            <motion.div
              className="relative aspect-[3/4] rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/athletes/matt-choi-sun-treadmill.png"
                alt="Matt Choi training"
                fill
                className="object-cover"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/40 to-transparent" />
            </motion.div>

            {/* Race photo — B&W shirtless */}
            <motion.div
              className="relative aspect-[3/4] rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/athletes/matt-choi-sun-race.png"
                alt="Matt Choi racing"
                fill
                className="object-cover"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/40 to-transparent" />
            </motion.div>

            {/* Track running — city skyline */}
            <motion.div
              className="relative aspect-[3/4] rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/athletes/matt-choi-sun-track.png"
                alt="Matt Choi track running"
                fill
                className="object-cover"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/40 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Stats + Social row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-8 border-t border-white/[0.05]">
          {/* Stats */}
          <motion.div
            className="flex gap-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-[family-name:var(--font-heading)] text-[22px] font-bold text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-[8px] tracking-[0.28em] text-white/20 uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="text-[9px] tracking-[0.2em] text-white/30 uppercase group-hover:text-[rgba(255,80,0,0.7)] transition-colors duration-300">
                  {social.label}
                </div>
                <div className="text-[8px] tracking-[0.1em] text-white/15 group-hover:text-white/30 transition-colors duration-300">
                  {social.handle}
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Embedded video section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="text-[8px] tracking-[0.32em] text-[rgba(255,80,0,0.5)] uppercase mb-4">
            Featured Content
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* YouTube embed */}
            <div className="relative aspect-video rounded-md overflow-hidden bg-[#0a0a0a] border border-white/[0.04]">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UUXSSvV5QYzdOIzzOpP5xnzA"
                title="Matt Choi — YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Instagram CTA */}
            <a
              href="https://www.instagram.com/mattchoi_6/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-video rounded-md overflow-hidden bg-[#0a0a0a] border border-white/[0.04] flex flex-col items-center justify-center gap-3 group hover:border-[rgba(255,80,0,0.15)] transition-colors duration-300"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/20 group-hover:text-[rgba(255,80,0,0.5)] transition-colors duration-300"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
              <span className="text-[9px] tracking-[0.28em] text-white/25 uppercase group-hover:text-white/40 transition-colors duration-300">
                @mattchoi_6 on Instagram
              </span>
              <span className="text-[7px] tracking-[0.2em] text-white/10 uppercase">
                Tap to follow
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
