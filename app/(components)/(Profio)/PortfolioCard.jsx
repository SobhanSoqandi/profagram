"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpLeft } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";

const getDomain = (url) => new URL(url).hostname.replace("www.", "");

export default function PortfolioCard({ project, index = 0 }) {
  const domain = getDomain(project.url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group"
    >
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-[23px] bg-slate-200/70 p-px shadow-[0_8px_30px_-20px_rgba(15,23,42,0.25)] transition-all duration-500 active:scale-[0.985] hover:-translate-y-1.5 hover:bg-linear-to-br hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 hover:shadow-[0_24px_50px_-20px_rgba(6,182,212,0.45)] sm:rounded-[29px] sm:active:scale-100 dark:bg-white/10 dark:shadow-[0_8px_30px_-20px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_24px_50px_-20px_rgba(6,182,212,0.3)]"
      >
        <article className="relative flex overflow-hidden rounded-[22px] bg-white p-2.5 sm:block sm:rounded-[28px] sm:p-0 dark:bg-slate-900">
          <span className="absolute right-0 top-5 h-10 w-0.5 origin-center scale-y-0 rounded-full bg-linear-to-b from-cyan-400 to-blue-500 transition-transform duration-500 group-hover:scale-y-100 sm:hidden" />

          <div className="relative h-25 w-30.5 shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:aspect-16/10 sm:h-auto sm:w-auto sm:rounded-none dark:bg-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 639px) 122px, (max-width: 1024px) 50vw, 33vw"
              quality={90}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/10 via-transparent to-black/10 sm:bg-linear-to-t sm:from-black/60 sm:via-black/5 sm:to-transparent" />
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

            <span className="absolute right-4 top-4 hidden items-center gap-1.5 rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md sm:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              آنلاین
            </span>

            <span className="absolute left-4 top-4 hidden h-10 w-10 -translate-y-2 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
              <FiArrowUpLeft size={18} />
            </span>

            <span
              dir="ltr"
              className="absolute bottom-4 left-4 hidden rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-md sm:inline-flex"
            >
              {domain}
            </span>
          </div>

          <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-2 sm:p-5 lg:p-6">
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[15px] font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-cyan-600 sm:text-lg dark:text-white dark:group-hover:text-cyan-400">
                {project.title}
              </h3>

              <p dir="ltr" className="mt-1 truncate text-right text-[11px] text-slate-400 sm:hidden dark:text-cyan-500">
                {domain}
              </p>

              <div className="mt-2.5 flex items-center gap-1.5 sm:hidden">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-500" />
                <span className="text-[10px] font-medium text-slate-400">برای مشاهده کلیک کنید</span>
              </div>

              <div className="mt-2 hidden items-center justify-between sm:flex">
                <p className="text-sm text-slate-500 dark:text-slate-400">مشاهده پروژه و جزئیات</p>
                <span className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  <span className="h-px w-6 bg-current opacity-30 transition-all duration-500 group-hover:w-10 group-hover:opacity-100" />
                  <FaArrowLeftLong size={14} className="transition-transform duration-500 group-hover:-translate-x-1.5" />
                </span>
              </div>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white sm:hidden dark:text-cyan-400">
              <FiArrowUpLeft size={16} />
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}