
"use client";

import Image from "next/image";
import Link from "next/link";

const getDomain = (url) => new URL(url).hostname.replace("www.", "");

export default function PortfolioCard({ project }) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="relative flex overflow-hidden rounded-[22px] border border-slate-200/70 bg-white p-2.5 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.2)] transition-all duration-500 active:scale-[0.985] group-hover:-translate-y-1 group-hover:border-cyan-200 group-hover:shadow-[0_18px_40px_-20px_rgba(6,182,212,0.25)] sm:block sm:rounded-[28px] sm:p-0 sm:active:scale-100 dark:border-slate-800 dark:bg-slate-800 dark:shadow-[0_8px_30px_-20px_rgba(0,0,0,0.5)] dark:group-hover:border-cyan-500/30 dark:group-hover:shadow-[0_18px_40px_-20px_rgba(6,182,212,0.15)]">
        <span className="absolute right-0 top-5 h-10 w-[2px] origin-center scale-y-0 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 transition-transform duration-500 group-hover:scale-y-100 sm:hidden" />

        <div className="relative h-[100px] w-[122px] shrink-0 overflow-hidden rounded-[16px] bg-slate-100 sm:aspect-[16/10] sm:h-auto sm:w-auto sm:rounded-none dark:bg-slate-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 639px) 122px, (max-width: 1024px) 50vw, 33vw"
            quality={90}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 sm:bg-gradient-to-t sm:from-black/50 sm:via-black/5 sm:to-transparent" />

          <div className="absolute bottom-2 left-2 hidden sm:block sm:bottom-4 sm:left-4">
            <span
              dir="ltr"
              className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-md"
            >
              {getDomain(project.url)}
            </span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center px-4 py-2 sm:p-5 lg:p-6">
          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-cyan-600 sm:text-lg dark:text-white dark:group-hover:text-cyan-400">
              {project.title}
            </h3>

            <p
              dir="ltr"
              className="md:hidden mt-1 text-center text-[11px] rounded-lg text-slate-400 sm:text-sm dark:text-cyan-500"
            >
              {getDomain(project.url)}
            </p>

            <div className="mt-2.5 flex items-center gap-1.5 sm:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
              <span className="text-[10px] font-medium text-slate-400 dark:text-slate-400">
                برای مشاهده کلیک کنید 
              </span>
            </div>

            <p className="mt-1.5 hidden text-sm text-slate-500 sm:block dark:text-slate-400">
              مشاهده پروژه و جزئیات
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
