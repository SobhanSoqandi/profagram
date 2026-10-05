"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiCode, FiFigma, FiLayers, FiZap, FiServer, FiSmartphone } from "react-icons/fi";
import { toPersianDigits } from "../utils/persian";

const steps = [
  { icon: FiFigma, title: "UI / UX Design", text: "طراحی تجربه و رابط کاربری در Figma", tags: [], tone: "bg-[#F24E1E]/10 text-[#F24E1E]" },
  { icon: FiCode, title: "Frontend Development", text: "ساخت رابط کاربری سریع و واکنش‌گرا", tags: ["React.js", "Next.js"], tone: "bg-cyan-500/10 text-cyan-500" },
  { icon: FiServer, title: "Backend Development", text: "توسعه API و منطق سمت سرور", tags: ["FastAPI", "Django", "Laravel"], tone: "bg-violet-500/10 text-violet-500" },
];

const features = [
  { icon: FiLayers, title: "طراحی قبل از توسعه", text: "هر محصول قبل از کدنویسی، از نظر UI/UX در Figma طراحی می‌شود." },
  { icon: FiCode, title: "توسعه یکپارچه", text: "فرانت‌اند و بک‌اند توسط اعضای متخصص تیم رایا توسعه داده می‌شود." },
  { icon: FiZap, title: "مستقل و انعطاف‌پذیر", text: "رایا یک تیم مستقل است و برای ساخت محصولات مختلف محدود به یک تکنولوژی نیست." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardBase =
  "group relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 backdrop-blur transition-colors duration-300 hover:border-cyan-500/40 dark:border-white/10 dark:bg-white/[0.03]";

function Spotlight({ children, className = "" }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const { left, top } = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - top}px`);
  };

  return (
    <motion.div
      ref={ref}
      variants={item}
      whileHover={{ y: -6 }}
      onMouseMove={handleMove}
      className={`${cardBase} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(320px_circle_at_var(--x)_var(--y),rgba(6,182,212,0.16),transparent_70%)]" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

function TechBadge({ children }) {
  return (
    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-700 transition-colors hover:bg-cyan-500 hover:text-white dark:text-cyan-300">
      {children}
    </span>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden px-5 py-5 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#06b6d414_1px,transparent_1px),linear-gradient(to_bottom,#06b6d414_1px,transparent_1px)] bg-size-[52px_52px] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 right-[-5rem] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/15"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-96 w-96 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-6xl"
      >
        <motion.div variants={item} className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              درباره رایا
            </span>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-snug tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
              ایده‌ها را{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500 bg-size-[200%_auto] bg-clip-text text-transparent"
              >
                طراحی می‌کنیم،
              </motion.span>{" "}
              می‌سازیم و رشد می‌دهیم.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-zinc-500 dark:text-zinc-400 sm:text-base">
            رایا یک تیم مستقل توسعه نرم‌افزار است که طراحی و توسعه محصولات دیجیتال را از ایده تا اجرای نهایی در کنار هم انجام می‌دهد.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Spotlight className="p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-cyan-500 dark:text-white sm:text-2xl">
                از طراحی تا محصول نهایی
              </h3>
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
              >
                <FiLayers size={22} />
              </motion.div>
            </div>

            <div className="relative space-y-4">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute bottom-6 right-[27px] top-6 w-px origin-top bg-linear-to-b from-[#F24E1E] via-cyan-500 to-violet-500"
              />
              {steps.map(({ icon: Icon, title, text, tags, tone }, index) => (
                <motion.div
                  key={title}
                  whileHover={{ x: -6 }}
                  className="relative flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900/70"
                >
                  <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-4 ring-white dark:ring-zinc-900 ${tone}`}>
                    <Icon size={21} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-zinc-900 dark:text-white sm:text-base">{title}</p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">{text}</p>
                    {tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tags.map((tech) => (
                          <TechBadge key={tech}>{tech}</TechBadge>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-2xl font-black text-zinc-200 dark:text-white/10">
                    {toPersianDigits(`0${index + 1}`)}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-6 flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed border-cyan-500/30 bg-cyan-500/5 py-4 text-xs font-semibold text-cyan-600 dark:text-cyan-400 sm:text-sm">
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "linear" }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/20 to-transparent"
              />
              <FiZap size={16} className="relative" />
              <span className="relative">یک تیم، یک مسیر، یک محصول کامل</span>
            </div>
          </Spotlight>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {features.map(({ icon: Icon, title, text }) => (
              <Spotlight key={title} className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500 transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                  <Icon size={21} />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white sm:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-500 dark:text-zinc-400">{text}</p>
              </Spotlight>
            ))}
          </div>
        </div>

        <motion.div
          variants={item}
          className="relative mt-5 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-blue-900 to-cyan-900 px-6 py-8 shadow-2xl shadow-blue-950/20 dark:ring-1 dark:ring-white/10 sm:flex-row sm:px-10"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 -top-16 h-48 w-48 rounded-full bg-cyan-400/30 blur-3xl"
          />
          <div className="relative flex items-center gap-4">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 backdrop-blur">
              <span className="absolute inset-0 animate-ping rounded-2xl bg-cyan-400/20" />
              <FiSmartphone size={21} className="relative" />
            </div>
            <div>
              <p className="text-base font-bold text-white sm:text-lg">آماده ساخت محصول بعدی هستیم</p>
              <p className="mt-1 text-xs text-blue-200 sm:text-sm">از یک ایده ساده تا یک محصول واقعی.</p>
            </div>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group/btn relative flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-900 shadow-lg transition-colors duration-300 hover:bg-cyan-400 hover:text-white"
          >
            شروع همکاری
            <FaArrowLeftLong size={16} className="transition-transform duration-300 group-hover/btn:-translate-x-2" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;