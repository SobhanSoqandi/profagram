"use client";

import { useState } from "react";
import { FiArrowLeft, FiUser } from "react-icons/fi";

const chips = [
  ["React.js", "react", "00B8D9", "-left-3 top-[16%] sm:-left-10", "0s"],
  ["Laravel", "laravel", "FF2D20", "-right-3 top-[46%] sm:-right-10", "1.2s"],
  ["Python", "python", "4B8BBE", "left-1 bottom-[8%] sm:-left-6", "2.4s"],
];

const btn = "inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold transition duration-300 hover:-translate-y-1 active:scale-95";
const enter = "animate-[ru_.7s_ease-out_both] motion-reduce:animate-none";
const rise = (i) => ({ animationDelay: `${i * 100}ms` });

const go = (e) => {
  e.preventDefault();
  document.querySelector(e.currentTarget.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero({ image = "/images/me.jpg" }) {
  const [failed, setFailed] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 14, y: ((e.clientY - r.top) / r.height - 0.5) * -14 });
  };

  return (
    <section dir="rtl" className="relative flex min-h-svh items-center overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,.14),transparent_60%)] px-5 pb-20 pt-32">
      <style>{`@keyframes ru{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes rf{50%{transform:translateY(-10px)}}@keyframes sh{from{transform:translateX(-150%) skewX(-12deg)}to{transform:translateX(450%) skewX(-12deg)}}@keyframes gs{to{background-position:100% 0}}@keyframes pr{0%{box-shadow:0 0 0 0 rgba(37,99,235,.45)}70%,100%{box-shadow:0 0 0 18px rgba(37,99,235,0)}}@keyframes ib{from{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes ax{50%{transform:translateX(-5px)}}@keyframes dg{to{background-position:26px 26px}}@keyframes bo{50%{transform:translate(8px,8px)}}`}</style>
      <div className="pointer-events-none absolute inset-0 animate-[dg_20s_linear_infinite] motion-reduce:animate-none [background-image:radial-gradient(circle,rgba(59,130,246,.22)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_72%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="text-center lg:text-start">
          <h1 style={rise(0)} className={`text-6xl font-black leading-tight sm:text-8xl ${enter}`}>
            <span className="inline-block animate-[gs_5s_ease-in-out_infinite_alternate] text-transparent motion-reduce:animate-none [background-clip:text] [background-image:linear-gradient(to_left,#2563eb,#38bdf8,#2563eb)] [background-size:200%_100%]">
              تیم رایا
            </span>
          </h1>
          <div style={rise(1)} className={`mt-5 flex items-center justify-center gap-3 lg:justify-start ${enter}`}>
            <span className="h-1 w-12 origin-right animate-[ib_.8s_.6s_ease-out_both] rounded-full bg-blue-500 motion-reduce:animate-none" />
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl dark:text-white">برنامه‌نویس تحت وب</h2>
          </div>
          <p style={rise(2)} className={`mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0 dark:text-blue-100/70 ${enter}`}>
            ایده‌ی شما رو به یه وب‌سایت یا وب‌اپلیکیشن سریع، زیبا و قابل‌اعتماد تبدیل می‌کنم؛ از طراحی رابط کاربری تا بک‌اند و انتشار نهایی، با Next.js، React، Laravel و FastAPI.
          </p>
          <div style={rise(3)} className={`mt-10 flex flex-wrap justify-center gap-4 lg:justify-start ${enter}`}>
            <a href="#skills" onClick={go} className={`group relative overflow-hidden animate-[pr_2.4s_ease-out_infinite] bg-blue-600 text-white hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/40 motion-reduce:animate-none ${btn}`}>
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/4 animate-[sh_3s_ease-in-out_infinite] bg-white/30 motion-reduce:hidden" />
              <span className="relative">مشاهده‌ی مهارت‌ها</span>
              <FiArrowLeft className="relative animate-[ax_1.6s_ease-in-out_infinite] motion-reduce:animate-none" />
            </a>
            <a href="#contact" onClick={go} className={`border border-blue-200 bg-white/60 text-blue-700 backdrop-blur hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/20 dark:border-blue-400/30 dark:bg-blue-950/40 dark:text-blue-200 dark:hover:border-blue-400 dark:hover:bg-blue-900/50 ${btn}`}>
              ارتباط با من
            </a>
          </div>
        </div>

        <div style={rise(2)} onMouseMove={move} onMouseLeave={() => setTilt({ x: 0, y: 0 })} className={`relative order-first mx-auto w-64 sm:w-80 lg:order-none lg:w-[24rem] ${enter}`}>
          <div style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }} className="relative transition-transform duration-200 ease-out">
            <div className="absolute -inset-8 animate-pulse rounded-full bg-blue-500/30 blur-3xl motion-reduce:animate-none dark:bg-blue-600/30" />
            <div className="absolute inset-0 translate-x-4 translate-y-4 animate-[bo_6s_ease-in-out_infinite] rounded-t-full rounded-b-[2rem] border-2 border-blue-500/40 motion-reduce:animate-none" />
            <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-t-full rounded-b-[2rem] border border-white/60 bg-blue-100 shadow-2xl shadow-blue-900/20 dark:border-blue-400/20 dark:bg-blue-950 dark:shadow-black/40">
              {failed ? <FiUser className="text-7xl text-blue-400" /> : <img src={image} alt="تیم رایا" onError={() => setFailed(true)} className="h-full w-full object-cover transition duration-700 hover:scale-105" />}
            </div>
            {chips.map(([name, slug, color, pos, delay]) => (
              <div key={name} style={{ animationDelay: delay }} className={`absolute ${pos} flex items-center gap-2 rounded-2xl border border-blue-100 bg-white/85 px-3 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur animate-[rf_6s_ease-in-out_infinite] motion-reduce:animate-none dark:border-blue-400/20 dark:bg-blue-950/80 dark:text-blue-50`}>
                <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" className="h-5 w-5" />
                <span dir="ltr">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}