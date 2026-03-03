"use client";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#030303] border-t border-white/[0.04] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-12 sm:px-16 md:px-20 lg:px-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left — Logo + Korean */}
          <div>
            <div className="font-[family-name:var(--font-heading)] text-[28px] font-bold tracking-[0.12em] text-white mb-1">
              SHADOW
            </div>
            <div className="text-[9px] tracking-[0.2em] text-white/[0.18]">
              서울 퍼포먼스 SPF
            </div>
          </div>

          {/* Center — Links */}
          <div className="flex items-center gap-6">
            {["Instagram", "Twitter / X", "TikTok", "Strava"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[9px] tracking-[0.2em] text-white/20 uppercase hover:text-[rgba(255,80,0,0.6)] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right — Info */}
          <div className="text-right">
            <div className="text-[8px] tracking-[0.25em] text-white/[0.12] uppercase">
              SPF 50+ PA++++ &nbsp;·&nbsp; Korean Patented Formula
            </div>
            <div className="text-[8px] tracking-[0.25em] text-white/[0.08] uppercase mt-1">
              © 2025 Shadow SPF. Seoul, Korea.
            </div>
          </div>
        </div>

        {/* Bottom divider + tagline */}
        <div className="mt-10 pt-6 border-t border-white/[0.03] flex items-center">
          <span className="text-[8px] tracking-[0.3em] text-white/[0.1] uppercase">
            Where Light Can&apos;t Follow
          </span>
          <span className="flex-1 h-px bg-white/[0.03] mx-4" />
          <span className="text-[8px] tracking-[0.3em] text-white/[0.1] uppercase">
            shadowspf.com
          </span>
        </div>
      </div>
    </footer>
  );
}
