"use client";

import { useRef } from "react";

const skills = [
  ["Next.js", "nextdotjs", "0f172a", "ffffff"],
  ["React.js", "react", "0ea5c9", "61DAFB"],
  ["Vue.js", "vuedotjs", "4FC08D", "4FC08D"],
  ["JavaScript", "javascript", "F7DF1E", "F7DF1E"],
  ["Laravel", "laravel", "FF2D20", "FF2D20"],
  ["FastAPI", "fastapi", "009688", "2dd4bf"],
  ["Django", "django", "0c4b33", "44B78B"],
  ["Python", "python", "3776AB", "5b9bd5"],
];

const logo = (slug, hex, cls) => (
  <img
    src={`https://cdn.simpleicons.org/${slug}/${hex}`}
    alt=""
    className={`h-14 w-14 transition duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:drop-shadow-[0_8px_18px_rgba(59,130,246,.55)] ${cls}`}
  />
);

const Arrow = ({ onClick, label, flip }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="grid h-11 w-11 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 shadow-sm transition hover:scale-105 hover:bg-blue-600 hover:text-white active:scale-95 dark:border-blue-400/30 dark:bg-blue-950 dark:text-blue-300 dark:hover:bg-blue-500 dark:hover:text-white"
  >
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${flip ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 6-6 6 6 6" />
    </svg>
  </button>
);

export default function Skills() {
  const list = useRef(null);
  const go = (d) => list.current.scrollBy({ left: d * list.current.clientWidth * 0.7, behavior: "smooth" });
  const spot = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <section dir="rtl" id="skills" className="relative overflow-hidden px-3 py-28">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-black text-slate-900 sm:text-6xl dark:text-white">مهارت‌ها</h2>
          <div className="flex gap-3">
            <Arrow onClick={() => go(1)} label="قبلی" flip />
            <Arrow onClick={() => go(-1)} label="بعدی" />
          </div>
        </div>
        <div
          onMouseMove={spot}
          className="rounded-[2rem] border border-blue-100 bg-white/70 backdrop-blur [background-image:radial-gradient(420px_circle_at_var(--x,50%)_var(--y,0%),rgba(59,130,246,.14),transparent_70%)] dark:border-blue-400/20 dark:bg-blue-950/40 dark:[background-image:radial-gradient(420px_circle_at_var(--x,50%)_var(--y,0%),rgba(96,165,250,.22),transparent_70%)]"
        >
          <div ref={list} className="flex snap-x snap-mandatory overflow-x-auto px-4 [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {skills.map(([name, slug, light, dark]) => (
              <div key={name} className="group flex w-36 shrink-0 snap-center flex-col items-center gap-5 py-12 sm:w-48">
                {logo(slug, light, "dark:hidden")}
                {logo(slug, dark, "hidden dark:block")}
                <span dir="ltr" className="font-semibold text-slate-800 dark:text-blue-50">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
