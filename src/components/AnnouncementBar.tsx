"use client";

const messages = [
  "Korean Patented UV Complex",
  "SPF 50+ PA++++",
  "Free Shipping on Orders $50+",
  "0 White Cast · 0 Drip · 0 Sting",
  "서울 퍼포먼스 SPF",
  "Sweat-Proof Stick Format",
];

export default function AnnouncementBar() {
  // Double the messages for seamless loop
  const doubled = [...messages, ...messages];

  return (
    <div className="w-full bg-[rgb(255,80,0)] overflow-hidden py-2 relative z-50">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((msg, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 text-[10px] sm:text-[11px] tracking-[0.2em] text-white/90 uppercase font-medium"
          >
            <span className="w-1 h-1 rounded-full bg-white/40 mr-8" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
