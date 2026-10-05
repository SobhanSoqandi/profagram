"use client";

import PortfolioCard from "@/app/(components)/(Profio)/PortfolioCard";

const projects = [
  {
    id: 1,
    title: "پایدار",
    image: "/images/projects/paydar.png",
    url: "https://paydarsys.ir",
  },
  {
    id: 2,
    title: "فروشگاه آنلاین",
    image: "/images/projects/shop.jpg",
    url: "https://example-shop.ir",
  },
  {
    id: 3,
    title: "وبسایت شرکت معماری",
    image: "/images/projects/vistaarch.png",
    url: "https://vistaarch.ir",
  },
   {
    id: 4,
    title: " CRM مدریت مشتری پایدار  ",
    image: "/images/projects/vistaarch.png",
    url: "https://paydarsys/dashboard.ir",
  },
];

export default function OnlinePortfolio() {
  return (
    <section
      id="portfolio"
      dir="rtl"
      className="bg-white px-5 py-10 transition-colors duration-500 dark:bg-[#020617] sm:px-8 lg:px-5"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
            نمونه‌کارها
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            پروژه‌های{" "}
            <span className="text-blue-600 dark:text-blue-400">من</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
            بخشی از پروژه‌هایی که در زمینه طراحی و توسعه وب انجام داده‌ام.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}