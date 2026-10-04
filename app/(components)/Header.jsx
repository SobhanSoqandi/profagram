"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiArrowUpLeft } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { title: "نمونه‌کارها", href: "#portfolio" },
  { title: "درباره ما", href: "#about" },
  { title: "ارتباط با ما", href: "#contact" },
];

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (id, duration = 1100) => {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const start = window.scrollY;
  const distance = target.getBoundingClientRect().top - offset;
  let startTime = null;

  const step = (now) => {
    startTime ??= now;
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    smoothScrollTo(href.slice(1));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div
        className={`relative mx-auto flex h-[64px] max-w-5xl items-center justify-between rounded-[22px] border px-3 backdrop-blur-2xl transition-all duration-500 sm:px-4 ${
          scrolled
            ? "border-blue-500/25 bg-white/80 shadow-[0_12px_40px_-8px_rgba(37,99,235,.25)] dark:border-blue-400/25 dark:bg-slate-950/75 dark:shadow-[0_12px_40px_-8px_rgba(59,130,246,.35)]"
            : "border-blue-500/15 bg-white/50 shadow-[0_8px_30px_-10px_rgba(37,99,235,.15)] dark:border-blue-400/15 dark:bg-slate-950/40 dark:shadow-[0_8px_30px_-10px_rgba(59,130,246,.2)]"
        }`}
      >
        <span className="pointer-events-none absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent dark:via-blue-400/70" />

        <Link
          href="/"
          onClick={closeMenu}
          className="relative h-11 w-24 transition-transform duration-300 hover:scale-[1.03]"
        >
          <Image
            src="/images/logo-3.png"
            alt="Profagram"
            width={70}
            height={70}
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-2xl border border-blue-500/15 bg-blue-500/[0.06] p-1 dark:border-blue-400/15 dark:bg-blue-400/[0.07] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="rounded-xl px-4 py-2 text-[13px] font-medium text-slate-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-[0_6px_16px_-4px_rgba(37,99,235,.6)] dark:text-slate-300 dark:hover:bg-blue-500"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[0.07] text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white dark:border-blue-400/20 dark:bg-blue-400/[0.08] dark:text-blue-300 dark:hover:bg-blue-500 dark:hover:text-white md:hidden"
          >
            {menuOpen ? (
              <FiX size={20} strokeWidth={1.8} />
            ) : (
              <FiMenu size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`mx-auto mt-2 max-w-5xl origin-top overflow-hidden rounded-2xl border border-blue-500/20 bg-white/90 p-1.5 shadow-[0_16px_45px_-10px_rgba(37,99,235,.3)] backdrop-blur-2xl transition-all duration-300 dark:border-blue-400/20 dark:bg-slate-950/90 dark:shadow-[0_16px_45px_-10px_rgba(59,130,246,.35)] md:hidden ${
          menuOpen
            ? "visible scale-100 opacity-100"
            : "invisible pointer-events-none scale-[.97] opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-500/10 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-400/10 dark:hover:text-blue-300"
          >
            <span>{item.title}</span>

            <FiArrowUpLeft
              size={16}
              strokeWidth={1.7}
              className="text-blue-400 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        ))}
      </div>
    </header>
  );
}