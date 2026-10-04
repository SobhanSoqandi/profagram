
"use client";

import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  return (
    <button
      dir="ltr"
      aria-label="تغییر تم"
      onClick={toggle}
      className="relative flex h-10 w-[76px] items-center rounded-full border border-blue-200 bg-gradient-to-r from-sky-100 to-blue-200 p-0.5 shadow-inner transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-95 dark:border-blue-400/30 dark:from-[#0a1a3f] dark:to-[#020617]"
    >
      <FiSun className="absolute left-3 text-base text-blue-200/60 opacity-0 transition-opacity duration-500 dark:opacity-100" />
      <FiMoon className="absolute right-3 text-base text-blue-700/50 transition-opacity duration-500 dark:opacity-0" />
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white text-amber-500 shadow-lg shadow-blue-900/20 transition-all duration-500 [transition-timing-function:cubic-bezier(.68,-.35,.3,1.35)] dark:translate-x-[38px] dark:bg-blue-500 dark:text-white dark:shadow-blue-500/40">
        <FiSun className="absolute rotate-0 scale-100 text-lg transition-all duration-500 dark:rotate-90 dark:scale-0" />
        <FiMoon className="absolute -rotate-90 scale-0 text-lg transition-all duration-500 dark:rotate-0 dark:scale-100" />
      </span>
    </button>
  );
}
